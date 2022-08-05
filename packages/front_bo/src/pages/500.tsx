import { NextPage } from "next";
import { useState } from "react";
import { ErrorContent, LateralMenu } from "../components";
import { sections } from "../config";

const NotFoundPage: NextPage = () => {
  const [section, setSection] = useState<string>(sections[0].title);
  const [label, setLabel] = useState<string>(sections[0].links[0].label);

  return (
    <div>
      <LateralMenu
        sections={sections}
        changeLabel={setLabel}
        changeSection={setSection}
      />
      <ErrorContent error={500} />
    </div>
  );
};

export default NotFoundPage;
