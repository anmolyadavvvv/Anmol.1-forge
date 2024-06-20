import ForgeUI, { render, Macro, Table, Head, Cell, Text, Row, IssuePanel } from '@forge/ui';

const issues = [
  {
    key: 'Ram sharma',
    status: 'In Progress',
  },
  {
    key: 'Shyam sharma',
    status: 'To Do',
  },
];

const App = () => (
  <IssuePanel>
    <Table>
      <Head>
        <Cell>
          <Text>Issue Key</Text>
        </Cell>
        <Cell>
          <Text>Status</Text>
        </Cell>
      </Head>
      {issues.map(issue => (
        <Row>
          <Cell>
            <Text>{issue.key}</Text>
          </Cell>
          <Cell>
            <Text>{issue.status}</Text>
          </Cell>
        </Row>
      ))}
    </Table>
  </IssuePanel>
);

export const run = render(<Macro app={<App />} />);
