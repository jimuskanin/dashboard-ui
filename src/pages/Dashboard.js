import React from 'react';

import "../assets/styles/dashboard.css";

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

import { RxChevronRight } from "react-icons/rx";

function Dashboard() {

    const totalItems = 10;

    return (
        <div>
            {/* SIDEBAR */}
            <Sidebar />
            <div className="pl-[82px]">
                {/* HEADER  */}
                <Header />
                <div className="p-4">
                    <div className="text-2xl font-medium pb-5">
                        Dashboard
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="flex flex-col gap-5">
                            {/* 1 */}
                            <div className="card-container">
                                <div className="border-anim"></div>
                                <div className="card h-[290px] p-6">
                                    <div className="shimmer"></div>
                                    <div className="card-content">
                                        <div className="flex justify-between items-center gap-4">
                                            <div className="text-xl font-bold">
                                                Orders
                                            </div>
                                            <RxChevronRight size={20} />
                                        </div>
                                        <div className="text-sm text-gray-400 pb-5">
                                            All the orders you've got until now
                                        </div>
                                        <div className="text-2xl font-bold">
                                            2388
                                        </div>
                                        <div className="text-lg font-bold pb-5">
                                            Orders
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="card-container">
                                <div className="border-anim"></div>
                                <div className="card h-[210px] p-6">
                                    <div className="shimmer"></div>
                                    <div className="card-content">
                                        <div className="flex justify-between items-center gap-4">
                                            <div className="text-xl font-bold">
                                                Returns
                                            </div>
                                            <RxChevronRight size={20} />
                                        </div>
                                        <div className="text-sm text-gray-400 pb-5">
                                            All the orders you've got until now
                                        </div>
                                        <div className="text-2xl font-bold">
                                            4436
                                        </div>
                                        <div className="text-lg font-bold pb-5">
                                            Returns
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            {/* 3 */}
                            <div className="card-container">
                                <div className="border-anim"></div>
                                <div className="card h-[210px] p-6">
                                    <div className="shimmer"></div>
                                    <div className="card-content">
                                        <div className="flex justify-between items-center gap-4">
                                            <div className="text-xl font-bold">
                                                Products
                                            </div>
                                            <RxChevronRight size={20} />
                                        </div>
                                        <div className="text-sm text-gray-400 pb-5">
                                            All the product you've got until now
                                        </div>
                                        <div className="text-2xl font-bold">
                                            3926
                                        </div>
                                        <div className="text-lg font-bold pb-5">
                                            Products
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="card-container">
                                <div className="border-anim"></div>
                                <div className="card h-[290px] p-6">
                                    <div className="shimmer"></div>
                                    <div className="card-content">
                                        <div className="flex justify-between items-center gap-4">
                                            <div className="text-xl font-bold">
                                                Brands
                                            </div>
                                            <RxChevronRight size={20} />
                                        </div>
                                        <div className="text-sm text-gray-400 pb-5">
                                            All the brands you've got until now
                                        </div>
                                        <div className="text-2xl font-bold">
                                            3370
                                        </div>
                                        <div className="text-lg font-bold pb-5">
                                            Brands
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2 lg:col-span-1">
                            {/* 5 */}
                            <div className="card-container h-screen">
                                <div className="border-anim"></div>
                                <div className="card h-[525px]">
                                    <div className="shimmer"></div>
                                    <div className="content-container h-full flex flex-col">
                                        <div className="content-section flex-grow min-h-0 flex flex-col">
                                            {/* STATIC */}
                                            <div className="card-content p-6">
                                                <div className="flex justify-between items-center gap-4">
                                                    <div className="text-xl font-bold">
                                                        Bags
                                                    </div>
                                                    <RxChevronRight size={20} />
                                                </div>
                                                <div className="text-sm text-gray-400 pb-5">
                                                    All the potential orders you've got until now
                                                </div>
                                                <div className="text-2xl font-bold">
                                                    1207
                                                </div>
                                                <div className="text-lg font-bold pb-5">
                                                    Bags
                                                </div>
                                                <div className="text-base font-bold">
                                                    Products
                                                </div>
                                            </div>
                                            {/* SCROLLABLE */}
                                            <div className="scrollable-content px-6 flex-grow overflow-auto min-h-0">
                                                {Array.from({ length: totalItems }, (_, index) => (
                                                    <div key={index} className="l-glass-card w-full p-5 mb-4">
                                                        <div className="flex items-center justify-between gap-3">
                                                            <div className="flex items-center gap-3">
                                                                <div className="font-bold">41x</div>
                                                                <div className="font-semibold">Black Back Hoodie</div>
                                                            </div>
                                                            <div className="font-semibold">3451 EGP</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Dashboard;
