interface App {
  description: string;
  repoName: string;
  repo: string;
  linkName: string;
  linkExtra?: string;
  link: string;
}

const projects: App[] = [
  {
    description: "MetaMask SDK - Interaact with MetaMask wallet",
    repoName: "metamask-sdk",
    repo: "https://github.com/MetaMask/metamask-sdk",
    linkName: "create-t3-turbo.vercel.app",
    link: "https://github.com/MetaMask/metamask-sdk",
  },

];

export default function OpenSourceAppList({
  descriptionIntl = "Description",
  repoIntl = "Repo",
  linkIntl = "Link",
}: {
  descriptionIntl: string;
  repoIntl: string;
  linkIntl: string;
}) {
  return (
    <table>
      <tr>
        <th>{descriptionIntl}</th>
        <th>{repoIntl}</th>
        <th>{linkIntl}</th>
      </tr>
      {projects.map((project) => (
        <tr>
          <td>{project.description}</td>
          <td>
            <a href={project.repo}>{project.repoName}</a>
          </td>
          <td>
            <a href={project.link}>{project.linkName}</a>
            {project.linkExtra && <span> {project.linkExtra}</span>}
          </td>
        </tr>
      ))}
    </table>
  );
}
