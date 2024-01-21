import Link from "next/link";
import capitalize from "lodash/capitalize";
import { Badge, BadgeColor } from "@features/ui";
import { Routes } from "@config/routes";
import { ProjectLanguage, ProjectStatus } from "@api/projects.types";
import type { Project } from "@api/projects.types";
import styles from "./project-card.module.scss";

type ProjectCardProps = {
  project: Project;
};

const languageNames = {
  [ProjectLanguage.react]: "React",
  [ProjectLanguage.node]: "Node.js",
  [ProjectLanguage.python]: "Python",
};

const statusColors: Record<string, BadgeColor> = {
  ["info"]: BadgeColor.success,
  ["warning"]: BadgeColor.warning,
  ["error"]: BadgeColor.error,
};

const dataMapping: Record<string, ProjectStatus> = {
  ["info"]: ProjectStatus.stable,
  ["warning"]: ProjectStatus.warning,
  ["error"]: ProjectStatus.critical,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, language, numIssues, numEvents24h, status } = project;
  console.log(
    "reverse mapping status to statusColors",
    status,
    statusColors[status],
    capitalize(status),
    ":",
    capitalize(dataMapping[status]),
  );
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.nameAndIconContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.languageIcon}
            src={`/icons/${language}.svg`}
            alt={language}
          />
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.language}>{languageNames[language]}</div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.issues}>
            <div className={styles.issuesTitle}>Total issues</div>
            <div className={styles.issuesNumber}>{numIssues}</div>
          </div>
          <div className={styles.issues}>
            <div className={styles.issuesTitle}>Last 24h</div>
            <div className={styles.issuesNumber}>{numEvents24h}</div>
          </div>
          <div className={styles.status}>
            <Badge color={statusColors[status]}>
              {capitalize(dataMapping[status])}
            </Badge>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Link href={Routes.issues} className={styles.viewIssuesAnchor}>
          View issues
        </Link>
      </div>
    </div>
  );
}
