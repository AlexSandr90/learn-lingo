import css from './LangLevels.module.scss';

interface LevelsProps {
  levels: string[];
}

const LangLevels: React.FC<LevelsProps> = ({ levels }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {levels.map((level: string, index: number) => (
        <li
          key={index}
          className={`${css.langLevel} ${index === 0 && css.langLevel_first}`}
        >
          #{level}
        </li>
      ))}
    </ul>
  );
};

export default LangLevels;
