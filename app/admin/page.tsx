'use client';

import { useState } from 'react';
import { LayoutDashboard, ShoppingBag, Utensils, Settings, LogOut, Bell, Search, Activity, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { label: 'Umsatz heute', value: '1.245,50 €', icon: DollarSign, trend: '+12%' },
        { label: 'Bestellungen', value: '48', icon: ShoppingBag, trend: '+5%' },
        { label: 'Aktive Nutzer', value: '12', icon: Users, trend: '-2%' },
        { label: 'Performance', value: '98%', icon: Activity, trend: '+1%' },
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col fixed inset-y-0 z-10">
                <div className="h-16 flex items-center px-6 border-b border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-viet-green flex items-center justify-center text-white font-display font-bold text-xl mr-3 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                        A
                    </div>
                    <span className="font-display font-bold text-white text-lg">Admin Panel</span>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'overview' ? 'bg-viet-green/10 text-viet-green' : 'hover:bg-white/5 hover:text-white'}`}
                    >
                        <LayoutDashboard className="w-5 h-5" />
                        <span className="font-medium">Overview</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('orders')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'orders' ? 'bg-viet-green/10 text-viet-green' : 'hover:bg-white/5 hover:text-white'}`}
                    >
                        <div className="relative">
                            <ShoppingBag className="w-5 h-5" />
                            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#0a0a0a]"></div>
                        </div>
                        <span className="font-medium">Orders (Live)</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('menu')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'menu' ? 'bg-viet-green/10 text-viet-green' : 'hover:bg-white/5 hover:text-white'}`}
                    >
                        <Utensils className="w-5 h-5" />
                        <span className="font-medium">Menu Manager</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('settings')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-viet-green/10 text-viet-green' : 'hover:bg-white/5 hover:text-white'}`}
                    >
                        <Settings className="w-5 h-5" />
                        <span className="font-medium">Settings</span>
                    </button>
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-colors text-zinc-400">
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 flex flex-col min-h-screen">
                {/* Header */}
                <header className="h-16 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-10">
                    <h1 className="font-display font-bold text-xl text-white capitalize">{activeTab}</h1>
                    <div className="flex items-center gap-6">
                        <div className="relative flex items-center">
                            <Search className="w-4 h-4 text-zinc-500 absolute left-3" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-64 h-9 bg-[#111] border border-white/10 rounded-full pl-9 pr-4 text-sm focus:outline-none focus:border-viet-green transition-colors text-white"
                            />
                        </div>
                        <button className="relative text-zinc-400 hover:text-white transition-colors">
                            <Bell className="w-5 h-5" />
                            <div className="absolute 0 right-0 w-2 h-2 bg-viet-green rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-viet-green to-blue-500 border-2 border-white/10"></div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8 flex-1 overflow-x-hidden">
                    {activeTab === 'overview' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                            {/* Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, idx) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div key={idx} className="bg-[#111] border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                                            <div className="absolute right-0 top-0 w-24 h-24 bg-viet-green/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                                            <div className="flex justify-between items-start mb-4 relative z-10">
                                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                                    <Icon className="w-6 h-6 text-viet-green" />
                                                </div>
                                                <span className={`text-sm font-bold ${stat.trend.startsWith('+') ? 'text-viet-green' : 'text-red-400'}`}>
                                                    {stat.trend}
                                                </span>
                                            </div>
                                            <h3 className="text-zinc-500 text-sm font-medium mb-1 relative z-10">{stat.label}</h3>
                                            <p className="font-display font-bold text-3xl text-white relative z-10">{stat.value}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Recent Orders Table (Mock) */}
                            <div className="bg-[#111] border border-white/5 rounded-2xl shadow-xl overflow-hidden">
                                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                                    <h2 className="font-display font-bold text-lg text-white">Live Orders Feedback</h2>
                                    <span className="flex items-center gap-2 text-xs font-bold text-viet-green bg-viet-green/10 px-3 py-1 rounded-full">
                                        <div className="w-2 h-2 rounded-full bg-viet-green animate-pulse"></div> Live
                                    </span>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/5 text-zinc-500 text-sm">
                                                <th className="p-4 font-medium pl-6">Order ID</th>
                                                <th className="p-4 font-medium">Customer</th>
                                                <th className="p-4 font-medium">Amount</th>
                                                <th className="p-4 font-medium">Status</th>
                                                <th className="p-4 font-medium pr-6 text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {[
                                                { id: '#ORD-0921', name: 'Max Mustermann', amount: '24,50 €', status: 'Preparing', color: 'text-yellow-500 bg-yellow-500/10' },
                                                { id: '#ORD-0920', name: 'Anna Schmidt', amount: '12,00 €', status: 'Ready', color: 'text-viet-green bg-viet-green/10' },
                                                { id: '#ORD-0919', name: 'Karim S.', amount: '45,80 €', status: 'Delivered', color: 'text-zinc-400 bg-white/5' },
                                            ].map((order, i) => (
                                                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                                    <td className="p-4 pl-6 font-medium text-white">{order.id}</td>
                                                    <td className="p-4 text-zinc-300">{order.name}</td>
                                                    <td className="p-4 font-display font-bold text-white">{order.amount}</td>
                                                    <td className="p-4">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.color}`}>
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 pr-6 text-right">
                                                        <button className="text-viet-green hover:text-white transition-colors font-medium">View</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab !== 'overview' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center h-[60vh] text-center">
                            <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                <Settings className="w-10 h-10 text-zinc-600 animate-[spin_4s_linear_infinite]" />
                            </div>
                            <h2 className="font-display font-bold text-2xl text-white mb-2">Module is under construction</h2>
                            <p className="text-zinc-500 max-w-sm">
                                The {activeTab} panel is currently being developed. It will feature real-time InsForge database connections.
                            </p>
                        </motion.div>
                    )}
                </div>
            </main>
        </div>
    );
}
