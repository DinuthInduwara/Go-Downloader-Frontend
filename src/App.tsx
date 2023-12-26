import { SideBar } from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { UploadView } from "./pages/UploadView";
import { FileManager } from "./pages/FileManager";

function App() {
	return (
		<div className="flex h-screen">
			<div className="flex bg-zinc-400 w-screen">
				<div className="fixed h-full">
					<SideBar />
				</div>
				<div className="ml-40 flex-grow overflow-y-auto w-full h-full">
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/upload" element={<UploadView />} />
						<Route path="/filemanager" element={<FileManager />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
