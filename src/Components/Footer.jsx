import React from "react";

function Footer() {
	return (
		<footer className="bg-[#0f0f32] text-white w-full dark:border-t border-teal-500">
			<div className="py-2 w-full">
				<div className="flex max-sm:flex-col justify-between items-center gap-4 px-12 py-3">
					<h2 className="font-bold text-xl">FlashTranslingo</h2>
					<div className="text-lg flex items-center justify-evenly gap-4">
						<a href="https://github.com/BhupendraLute" target="_blank">
							<i className="fa-brands fa-github"></i>
						</a>
						<a href="https://wa.me/7758932660" target="_blank">
							<i className="fa-brands fa-whatsapp"></i>
						</a>
						<a href="https://www.linkedin.com/in/bhupendra-lute-a772b1273/" target="_blank">
							<i className="fa-brands fa-linkedin"></i>
						</a>
					</div>
				</div>
				<div className="py-2 flex max-sm:flex-col-reverse justify-center items-center gap-8 w-full">
					<p>&copy;copyright-2024</p>
					<p>Developed By-Bhupendra Lute</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
