import React from "react";
import { observer } from 'mobx-react';

import {SectionTitle} from "../../components/SectionTitle";
import {QuizList} from "../../components/Quiz/QuizList";

let QuizSelection = ({ quizzes }) => (
  <div>
    <SectionTitle title="Select a quiz" />
    <QuizList list={quizzes} />
  </div>
);
QuizSelection = observer(QuizSelection);

export default QuizSelection;