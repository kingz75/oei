import React from "react";
import { useParams } from "react-router-dom";

import DrugAbuse from "./programPages/DrugAbuse";
import WomenEmpowerment from "./programPages/WomenEmpowerment";
import SkillAcquisition from "./programPages/SkillAcquisition";
import ChildEducation from "./programPages/ChildEducation";

function ProgramDetail() {
  const { id } = useParams();

  const renderProgram = () => {
    switch (id) {
      case "1":
        return <DrugAbuse />;
      case "2":
        return <WomenEmpowerment />;
      case "3":
        return <SkillAcquisition />;
      case "4":
        return <ChildEducation />;
      default:
        return (
          <h2 className="text-center py-20 text-[#182948] font-bold text-xl">
            Program not found
          </h2>
        );
    }
  };

  return <>{renderProgram()}</>;
}

export default ProgramDetail;
