export function formatBytes(bytes: number = 0, decimals = 2) {
	if (bytes === 0) return "0 Bytes";

	const k = 1024;
	const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

	const i = Math.floor(Math.log(bytes) / Math.log(k));
	const formattedSize = parseFloat(
		(bytes / Math.pow(k, i)).toFixed(decimals)
	);

	return `${formattedSize} ${sizes[i]}`;
}
export function calculateETA(
	totalSize: number,
	downloadedSize: number,
	downloadSpeed: number
) {
	if (downloadSpeed <= 0) {
		return -1;
	}
	const remainingSize = totalSize - downloadedSize;
	const secondsRemaining = remainingSize / downloadSpeed;
	return secondsRemaining;
}

export function formatTime(seconds: number) {
	const date = new Date(seconds * 1000); //  seconds to milliseconds
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const remainingSeconds = date.getUTCSeconds();

	const formattedHours = String(hours).padStart(2, "0");
	const formattedMinutes = String(minutes).padStart(2, "0");
	const formattedSeconds = String(remainingSeconds).padStart(2, "0");

	return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export const fetchJsonData = async (url: string, params = {}) => {
	try {
		const response = await fetch(url, params);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

export const fetchTextData = async (url: string, params = {}) => {
	try {
		const response = await fetch(url, params);
		const data = await response.text();
		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};

export const addDownloadTask = async (
	url: string,
	task: "yt-dlp" | "direct-download" | "streamtape"
) => {
	if (!url) return "URL Cant Be Empty";
	const formData = new URLSearchParams();
	formData.append("url", url);
	const resp = await fetchTextData("/api/" + task, {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: formData,
	});
	return resp;
};
