import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Button } from "./button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function LightDarkToggle() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <SunIcon className="block darkk:hidden" />
            <MoonIcon className="hidden dark:block" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="hiddenv">Enable light mode</span>
          <span>Enable dark mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
