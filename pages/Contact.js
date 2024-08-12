const Contact = () => {
  return (
    
        
        <div className="container mx-auto bg-white max-w-[1215px] dark:text-[#D1D5DB] dark:bg-[#111827] py-[100px]">
            <div className="md:mx-[200px] mx-10 py-10">
                <div className="mb-[39px]">
                    <div className="mb-5 mt-3 ">
                        <h2 className="text-4xl font-semibold">Contact Us</h2>
                        <p className="md:max-w-[624px] max-w-[300px] font-normal text-base text-[#696A75] mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div className="md:flex md:gap-[50px] ">
                        <div className="border-[1px] rounded-lg w-[294px] p-4 mb-4">
                            <h3 className="font-semibold text-2xl mb-2.5">Address</h3>
                            <p className="font-normal text-lg text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</p>
                        </div>
                        <div className="border-[1px] rounded-lg w-[294px] p-4 mb-4">
                            <h3 className="font-semibold text-2xl mb-2.5">Contact</h3>
                            <p className="font-normal text-lg text-[#696A75]">313-332-8662 <br />
                            info@email.com</p>
                        </div>
                    </div>
                </div>
                <div className="p-[29px] bg-[#F6F6F7] rounded-lg dark:text-[#D1D5DB] dark:bg-[#030712] dark:border-white dark:border-[1px]">
                    <h1>Leave a Message</h1>
                    <div>
                        <div className="md:flex sm:gap-5 mt-5 mb-4 ">
                            <input type="text" placeholder="Your name" className="input input-bordered sm:w-[225px] w-[150px] h-[38px] dark:text-[#D1D5DB] dark:bg-[#111827] mb-5 mr-4" />
                            <input type="text" placeholder="Your Email" className="input input-bordered sm:w-[225px] w-[150px] h-[38px] dark:text-[#D1D5DB] dark:bg-[#111827] sm:ml-4" />
                        </div>
                        <div className="max-w-[478px] mb-5">
                            <input type="text" placeholder="SUBJECT" className="input input-bordered h-[35px] w-full dark:text-[#D1D5DB] dark:bg-[#111827]" />
                        </div>
                        <div className="max-w-[478px] mb-[29px]">
                            <input type="text" placeholder="Write a message" className="input input-bordered w-full h-[134px] dark:text-[#D1D5DB] dark:bg-[#111827]" />
                        </div>
                        <button className="btn bg-[#4B6BFB] dark:text-[#D1D5DB] dark:bg-[#111827] text-white">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Contact;