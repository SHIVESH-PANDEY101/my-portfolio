import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Contact</h2>

      <div className="card">
        <p>Email: urs.kumarshivesh@gmail.com</p>
        <p>Mb. No. :6207755445</p>

        <div style={{ marginTop: 20 }}>
          <a
            href="https://www.linkedin.com/in/shivesh-kumar-pandey/"
            target="_blank"
            rel="noopener noreferrer"
            style={btn}
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/SHIVESH_50214/"
            target="_blank"
            rel="noopener noreferrer"
            style={btn}
          >
            LeetCode
          </a>
        </div>
      </div>
    </motion.section>
  );
}

const btn = {
  display: "inline-block",
  marginRight: "10px",
  padding: "10px 18px",
  borderRadius: "8px",
  background: "#0a66c2",
  color: "white",
  textDecoration: "none",
};