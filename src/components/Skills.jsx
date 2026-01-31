export default function Skills() {
  const skills = [
    "Java", "Python", "SQL", "JDBC", "DBMS",
    "React.js", "Web Development",
    "Machine Learning", "NLP",
    "Leadership", "Team Management"
  ]

  return (
    <section>
      <h2>Skills</h2>
      <div className="card">
        {skills.map(skill => (
          <span key={skill} style={{
            display: "inline-block",
            background: "#e7f0ff",
            color: "#0a66c2",
            padding: "8px 14px",
            margin: "6px",
            borderRadius: "20px",
            fontSize: "14px"
          }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}