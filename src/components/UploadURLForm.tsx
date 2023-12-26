import { IconLink } from "./Icons/IconLink";
import { IconYoutube } from "./Icons/IconYoutube";
export const UploadURLForm = () => {
	return (
		<div className="w-full h-full flex flex-col space-y-8 justify-center items-center">
			<div className="border-2 border-purple-500 w-2/3 rounded-md">
				<label className="text-md text-gray-600 m-4">Direct Link</label>
				<div className="control has-icons-left has-icons-right m-4">
					<div className="flex flex-row space-x-3">
						<input
							className="input is-success"
							type="url"
							placeholder="Direct Link"
						/>
						<button className="button is-primary text-center">
							+
						</button>
					</div>

					<span className="icon is-small is-left">
						<IconLink />
					</span>
					<span className="icon is-small is-right">
						<i className="fas fa-check"></i>
					</span>
					<p className="help text-gray-400">
						eg : www.example.com/random_video.mp4
					</p>
				</div>
			</div>
			<div className="border-2 border-purple-500 w-2/3 rounded-md">
				<label className="text-md text-gray-600 m-4">
					YT-DLP + Video Streaming Sites
				</label>
				<div className="control has-icons-left has-icons-right m-4">
					<div className="flex flex-row space-x-3">
						<input
							className="input is-danger"
							type="url"
							placeholder="YT-DLP"
						/>
						<button className="button is-danger text-center">
							+
						</button>
					</div>

					<span className="icon is-small is-left">
						<IconYoutube />
					</span>
					<span className="icon is-small is-right">
						<i className="fas fa-check"></i>
					</span>
					<p className="help text-gray-400">
						eg : Youtube, TikTok, Facebook, Instergram, + ...
					</p>
				</div>
			</div>
			<div className="border-2 border-purple-500 w-2/3 rounded-md">
				<label className="text-md text-gray-600 m-4">Streamtape</label>
				<div className="control has-icons-left has-icons-right m-4">
					<div className="flex flex-row space-x-3">
						<input
							className="input is-link"
							type="url"
							placeholder="Streamtape"
						/>
						<button className="button is-link text-center">
							+
						</button>
					</div>

					<span className="icon is-small is-left">
						<IconLink />
					</span>
					<span className="icon is-small is-right">
						<i className="fas fa-check"></i>
					</span>
					<p className="help text-gray-400">
						eg : www.example.com/random_video.mp4
					</p>
				</div>
			</div>
		</div>
	);
};
