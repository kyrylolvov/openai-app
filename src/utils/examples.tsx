import {
  faCircleQuestion, faGraduationCap, faEarthAmericas, faTag,
} from '@fortawesome/free-solid-svg-icons';
import backgroundQa from '../assets/img/backgrounds/backgroundQa.png';
import backgroundGrammar from '../assets/img/backgrounds/backgroundGrammar.png';
import backgroundTranslate from '../assets/img/backgrounds/backgroundTranslate.png';
import backgroundClassification from '../assets/img/backgrounds/backgroundClassification.png';

const examples = [
  {
    title: 'Questions and Answers',
    paragraph: "Answer questions based on AI's knowledge.",
    background: backgroundQa,
    icon: faCircleQuestion,
  },
  {
    title: 'Grammar correction',
    paragraph: 'Corrects sentences into standard English.',
    background: backgroundGrammar,
    icon: faGraduationCap,
  },
  {
    title: 'English to other languages',
    paragraph: 'Translates English into other languages',
    background: backgroundTranslate,
    icon: faEarthAmericas,
  },
  {
    title: 'Classification',
    paragraph: 'Classify items into categories via example.',
    background: backgroundClassification,
    icon: faTag,
  },
];

export default examples;
