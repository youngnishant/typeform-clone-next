import { createElement } from "react";
import classNames from "classnames";
import { QuestionProps } from "@/types";

import {
  EmailInput,
  FirstNameInput,
  GoalInput,
  IndustryInput,
  Intro,
  LastNameInput,
  RoleInput,
} from "@/components/shared/input-fields";

import styles from "./Question.module.css";

export function Question({
  inView,
  inViewSlide,
  outView,
  outViewSlide,
  isRendered,
  type,
}: QuestionProps) {
  const renderComponentConfig = {
    intro: Intro,
    firstName: FirstNameInput,
    lastName: LastNameInput,
    industry: IndustryInput,
    role: RoleInput,
    goal: GoalInput,
    email: EmailInput,
  };

  const styleConfig = {
    [styles["slide-out"]]: outView,
    [styles["slide-in"]]: inView,
    [styles["out-view__up"]]: outViewSlide === "up",
    [styles["out-view__down"]]: outViewSlide === "down",
    [styles["in-view__up"]]: inViewSlide === "up",
    [styles["in-view__down"]]: inViewSlide === "down",
    [styles["rendered"]]: isRendered,
  };

  return (
    <div className={classNames(styles["question-box"], styleConfig)}>
      {createElement(renderComponentConfig[type])}
    </div>
  );
}
