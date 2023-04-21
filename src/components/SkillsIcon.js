export default function SkillContainer({ icon: Icon, name }) {
  return (
    <div className="skills-icon">
      <Icon className="skill-icon" />
      <p>{name}</p>
    </div>
  );
}
