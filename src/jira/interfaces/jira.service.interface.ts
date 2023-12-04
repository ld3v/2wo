import {
  TPaginationJira,
  TSprintJira,
  TUserJira,
  TWorklog,
  TWorklogResponse,
} from 'types/jira';
import { TBoardJira } from 'types/jira/board.type';
import { TIssuePagination } from 'types/jira/issue.type';

export const JIRA_SERVICE = 'JIRA-SERVICE';
export interface IJiraService {
  // USER
  getMyself: (username: string, password: string) => Promise<TUserJira>;
  // BOARD
  getAllBoards: (
    username: string,
    password: string,
  ) => Promise<TPaginationJira<TBoardJira>>;
  // SPRINT
  getAllSprintByBoardID: (
    username: string,
    password: string,
    boardId: number,
  ) => Promise<TPaginationJira<TSprintJira>>;
  getActiveSprintByBoardID(
    u: string,
    p: string,
    boardId: number,
  ): Promise<TSprintJira | null>;
  // ISSUE
  getIssuesBySprintID(
    u: string,
    p: string,
    sprintID: number,
  ): Promise<TIssuePagination>;
  // WORKLOG
  getWorklogsByIssueID(
    u: string,
    p: string,
    issueIds: (number | string)[],
  ): Promise<Record<string | number, TWorklog[]>>;
  getWorklogsByActiveSprint(
    u: string,
    p: string,
    boardId: number,
  ): Promise<TWorklogResponse[]>;
}