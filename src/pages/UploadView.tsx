import { UploadURLForm } from "../components/UploadURLForm";
import { ProgressBar } from "../components/ProgressBar";
import { IconPause } from "../components/Icons/IconPause";
import { IconPlay } from "../components/Icons/IconPlay";
import { WhiteBoard } from "../components/WhiteBoard";

export const UploadView = () => {
	return (
		<WhiteBoard>
			<h1 className="pl-10 pt-5 text-xl font-serif underline ">
				Download Engine 2.0.
			</h1>
			<div className="mt-10 w-full ">
				<UploadURLForm />
			</div>
			<h1 className="pl-10 mt-10 pt-5 text-xl font-serif underline ">
				Download Tasks
			</h1>
			<div className="flex flex-col justify-center items-center w-full my-10 px-7 space-y-4 pb-16">
				<div className="w-full flex flex-row justify-center items-center rounded-lg overflow-hidden border border-gray-300 shadow-lg bg-white py-4 space-x-10 hover:-translate-y-2 transition-all duration-200 hover:ring-8 cursor-pointer">
					<ProgressBar
						speed="12mb/s"
						done={12333213}
						total={34334243}
						eta="32d"
						fPath="C:\Users\ss\Downloads\Compressed.png"
						progColor="is-link"
					/>
					<div className="flex flex-row space-x-2">
						<button className="button is-danger">X</button>
						<button className="button is-warning">
							<IconPause />
						</button>
					</div>
				</div>
				<div className="w-full flex flex-row justify-center items-center rounded-lg overflow-hidden border border-gray-300 shadow-lg bg-white py-4 space-x-10 hover:-translate-y-2 transition-all duration-200 hover:ring-8 cursor-pointer">
					<ProgressBar
						speed="12mb/s"
						done={23832333}
						total={34234343}
						eta="23m"
						fPath="C:\Users\ss\Downloads\Compressed.png"
						progColor="is-link"
					/>
					<div className="flex flex-row space-x-2">
						<button className="button is-danger">X</button>
						<button className="button is-primary">
							<IconPlay />
						</button>
					</div>
				</div>
				<div className="w-full flex flex-row justify-center items-center rounded-lg overflow-hidden border border-gray-300 shadow-lg bg-white py-4 space-x-10 hover:-translate-y-2 transition-all duration-200 hover:ring-8 cursor-pointer">
					<ProgressBar
						speed="12mb/s"
						done={23832333}
						total={34234343}
						eta="23m"
						fPath="C:\Users\ss\Downloads\Compressed.png"
						progColor="is-link"
					/>
					<div className="flex flex-row space-x-2">
						<button className="button is-danger">X</button>
						<button
							className="button is-primary is-loading"
							disabled
						>
							<IconPlay />
						</button>
					</div>
				</div>
			</div>
		</WhiteBoard>
	);
};
