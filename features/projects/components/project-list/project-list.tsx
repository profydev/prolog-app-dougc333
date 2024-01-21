import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";

export function ProjectList() {
  //  const { data, isLoading, isError, error } = useGetProjects();
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return (
      <div data-cy="projectId" className={styles.container}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul id="projul" className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
