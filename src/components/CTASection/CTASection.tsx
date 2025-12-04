import styles from "./CTASection.module.css";
import Icon from "@/components/ui/Icon";

const steps = [
  {
    number: "1",
    icon: "user",
    title: "Register",
    description: "Create your account in minutes",
  },
  {
    number: "2",
    icon: "card",
    title: "Fund",
    description: "Deposit funds securely",
  },
  {
    number: "3",
    icon: "arrow-right-lg",
    title: "Start Trading",
    description: "Access 17,000+ markets",
  },
];

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepIcon}><Icon name={step.icon} size={24} /></div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
