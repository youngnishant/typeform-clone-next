import {
  BtnContainer,
  QuestionBox,
  QuestionInputText,
  QuestionNumHeading,
} from "../index";
import classNames from "classnames";
import styles from "./Questions.module.css";
import Image from "next/image";
import { QuestionProps } from "./QuestionZero";
import { ChangeEventHandler } from "react";
import { SET_FIRST_NAME } from "@/reducers";
import { useQuestionReducer } from "@/hooks";

export function QuestionOne({
  inView,
  inViewSlide,
  outView,
  outViewSlide,
}: QuestionProps) {
  const { state, dispatch } = useQuestionReducer();
  const { firstName } = state;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({ type: SET_FIRST_NAME, payload: event.target.value });
  };

  return (
    <QuestionBox
      className={classNames({
        [styles["slide-out"]]: outView,
        [styles["slide-in"]]: inView,
        [styles["out-view__up"]]: outViewSlide === "up",
        [styles["out-view__down"]]: outViewSlide === "down",
        [styles["in-view__up"]]: inViewSlide === "up",
        [styles["in-view__down"]]: inViewSlide === "down",
      })}
    >
      <QuestionNumHeading questionNum={1}>
        What&apos;s your first name? *
      </QuestionNumHeading>

      <QuestionInputText
        placeholder="Type your answer here..."
        value={firstName}
        onChange={handleInputChange}
      />

      <BtnContainer
        className={classNames(styles["btn-container"], styles["ok"])}
        showPressEnter={true}
      >
        OK{" "}
        <Image
          src="/check-small.svg"
          alt="check small"
          width={34}
          height={34}
        />
      </BtnContainer>
    </QuestionBox>
  );
}