import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ProjectOverView } from "./ProjectOverView";
import { ProjectWise } from "./ProjectWise";
import { MatrixView } from "./MatrixView";
import { ResourceWiseViewAllTasks } from "./ResourceWiseViewAllTasks";
import { Dashboard } from "./Dashboard";
import { CreateUsecase } from "./CreateUsecase";
import { ProcurementDetail } from "./Procurement";

export const Pages = () => {
	return (
		<BrowserRouter>
			<Routes>
				{<Route path="/projectoverview" element={<ProjectOverView />} />}
				{<Route path="/projectwise" element={<ProjectWise />} />}
				{<Route path="/matrixview" element={<MatrixView />} />}
				{<Route path="/resourcewiseviewalltasks" element={<ResourceWiseViewAllTasks />} />}
				{<Route path="/dashboard" element={<Dashboard />} />}
				{<Route path="/createusecase" element={<CreateUsecase />} />}
				{<Route path="/procurement-detail/:id" element={<ProcurementDetail />} />}
			</Routes>
		</BrowserRouter>
	);
};
export default React.memo(Pages);
