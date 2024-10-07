export const Expenses = () => {
    return (
        <div className="bg-neutral-cream font-body flex justify-center items-center h-screen w-full">
            <div className="flex flex-col space-y-3 justify-center items-center w-80 h-auto">
                <div className="bg-primary-softred py-3 px-4 flex justify-between items-center rounded-lg w-full">
                    <div>
                        <h5 className="text-neutral-vpaleorange text-xs font-light">My balance</h5>
                        <span className="text-neutral-vpaleorange text-lg font-bold">$921.48</span>
                    </div>

                    <div className="flex items-center">
                        <div className="border-2 bg-transparent border-vpaleorange w-8 h-8 rounded-full"></div>
                        <div className="bg-neutral-darkbrown w-8 h-8 rounded-full"></div>
                    </div>

                </div>

                <div className="bg-neutral-vpaleorange py-4 px-5 rounded-lg w-full ">
                    <h3 className="text-neutral-darkbrown text-lg font-bold">Spending - Last 7 days</h3>

                    <div className="py-6 flex justify-between items-end border-b-2 border-b-neutral-cream">
                        <div className="flex flex-col space-y-3 ">
                            <div className="rounded-sm bg-primary-softred w-8 h-7"></div>
                            <span className="text-neutral-mediumbrown text-sm font-medium text-center">mon</span>
                        </div>
                        <div className="flex flex-col space-y-3 ">
                            <div className="rounded-sm bg-primary-softred w-8 h-16"></div>
                            <span className="text-neutral-mediumbrown text-sm font-medium text-center">tue</span>
                        </div>
                        <div className="flex flex-col space-y-3 ">
                            <div className="rounded-sm bg-primary-cyan w-8 h-28"></div>
                            <span className="text-neutral-mediumbrown text-sm font-medium text-center">wed</span>
                        </div>
                        <div className="flex flex-col space-y-3 justify-center">
                            <div className="rounded-sm bg-primary-softred w-8 h-14"></div>
                            <span className="text-neutral-mediumbrown text-sm font-medium text-center">thu</span>
                        </div>
                        <div className="flex flex-col space-y-3 justify-center">
                            <div className="rounded-sm bg-primary-softred w-8 h-10"></div>
                            <span className="text-neutral-mediumbrown text-sm font-medium text-center">fri</span>
                        </div>
                        <div className="flex flex-col space-y-3 justify-center">
                            <div className="rounded-sm bg-primary-softred w-8 h-24"></div>
                            <span className="text-neutral-mediumbrown text-sm font-medium text-center">sat</span>
                        </div>
                        <div className="flex flex-col space-y-3 justify-center">
                            <div className="rounded-sm bg-primary-softred w-8 h-11"></div>
                            <span className="text-neutral-mediumbrown text-sm font-medium text-center">sun</span>
                        </div>
                        
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <div>
                            <h4 className="text-neutral-mediumbrown text-xs font-medium">Total this month</h4>
                            <p className="text-neutral-darkbrown text-xl font-bold">$478.33</p>
                        </div>
                        <div className="flex flex-col items-end">
                            <h4 className="text-neutral-darkbrown text-xs font-bold">+2.4%</h4>
                            <p className="text-neutral-mediumbrown text-xs font-semibold">from last month</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}