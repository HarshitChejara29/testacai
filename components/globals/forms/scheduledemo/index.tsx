import React from "react";

const Scheduledemo = () => {

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Schedule Demo</h2>
            <form>
                <div className="mb-4">
                    <input
                        className="w-full border border-black rounded-full px-5 py-2 placeholder-black"
                        placeholder="Name"
                        type="text"
                        id="name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full border border-black rounded-full px-5 py-2 placeholder-black"
                        placeholder="Email"
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full border border-black rounded-full px-5 py-2 placeholder-black"
                        placeholder="Phone no."
                        type="tel"
                        id="mobile"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full border border-black rounded-full px-5 py-2 placeholder-black"
                        placeholder="Company"
                        type="text"
                        id="company"
                        required
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        className="w-full border border-black rounded-3xl px-5 py-2 placeholder-black"
                        placeholder="Message"
                        id="message"
                        rows={4}
                        required
                    />
                </div>
                <div className="mb-6">
                    <button className="w-full bg-[#4CAF50] text-[#ffffff] rounded-full py-2 px-4" type="submit">Send Message</button>
                </div>
            </form>
        </>
    );
};

export default Scheduledemo;