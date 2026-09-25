import React from "react";
import styled from "@emotion/styled";

type IssueStatus = "Raised" | "In Progress" | "Resolved";

type Issue = {
  title: string;
  area: string;
  category: string;
  status: IssueStatus;
  lastUpdate: string;
};

type Engagement = {
  area: string;
  date: string;
  discussion: string;
  biggestProblem: string;
  status: "Open" | "Follow-up" | "Completed";
};

type Activity = {
  title: string;
  type: "Meeting" | "Baraza" | "Community Visit" | "Consultation";
  date: string;
  location: string;
  status: "Planned" | "Completed" | "Cancelled";
};

type ManifestoItem = {
  title: string;
  area: string;
  progress: number;
  status: "Planned" | "In Progress" | "Completed";
};

type ElectionDate = {
  date: string;
  targetDate: string;
  title: string;
  type: string;
};

type RecentActivity = {
  date: string;
  text: string;
  type: string;
};

/* -------------------------------------------------------------------------- */
/* Data */
/* -------------------------------------------------------------------------- */

const previousVoterBaseline = 12450;
const currentSupporters = 7820;

const issues: Issue[] = [
  {
    title: "Water supply interruptions",
    area: "Area A",
    category: "Water",
    status: "In Progress",
    lastUpdate: "2 days ago",
  },
  {
    title: "Road and drainage maintenance",
    area: "Area B",
    category: "Infrastructure",
    status: "Raised",
    lastUpdate: "5 days ago",
  },
  {
    title: "Youth employment opportunities",
    area: "Area C",
    category: "Youth",
    status: "Raised",
    lastUpdate: "1 week ago",
  },
  {
    title: "Health facility service gaps",
    area: "Area D",
    category: "Health",
    status: "Resolved",
    lastUpdate: "1 week ago",
  },
];

const engagements: Engagement[] = [
  {
    area: "Area A",
    date: "22 Sep 2026",
    discussion: "Water access and supply",
    biggestProblem: "Frequent water interruptions",
    status: "Follow-up",
  },
  {
    area: "Area B",
    date: "18 Sep 2026",
    discussion: "Roads and drainage",
    biggestProblem: "Poor drainage during heavy rain",
    status: "Open",
  },
  {
    area: "Area C",
    date: "14 Sep 2026",
    discussion: "Youth opportunities",
    biggestProblem: "Limited employment opportunities",
    status: "Follow-up",
  },
];

const activities: Activity[] = [
  {
    title: "Youth engagement meeting",
    type: "Meeting",
    date: "26 Sep 2026",
    location: "Community Centre",
    status: "Planned",
  },
  {
    title: "Infrastructure discussion",
    type: "Baraza",
    date: "03 Oct 2026",
    location: "Ward Hall",
    status: "Planned",
  },
  {
    title: "Community consultation",
    type: "Consultation",
    date: "12 Sep 2026",
    location: "Ward Hall",
    status: "Completed",
  },
  {
    title: "Water issue follow-up",
    type: "Community Visit",
    date: "18 Sep 2026",
    location: "Area A",
    status: "Completed",
  },
];

const manifesto: ManifestoItem[] = [
  {
    title: "Improve water access",
    area: "Water",
    progress: 60,
    status: "In Progress",
  },
  {
    title: "Improve roads and drainage",
    area: "Infrastructure",
    progress: 30,
    status: "In Progress",
  },
  {
    title: "Support youth opportunities",
    area: "Youth",
    progress: 20,
    status: "Planned",
  },
  {
    title: "Improve health services",
    area: "Health",
    progress: 100,
    status: "Completed",
  },
];

const electionDates: ElectionDate[] = [
  {
    date: "15 Oct 2026",
    targetDate: "2026-10-15",
    title: "Political party authorised persons deadline",
    type: "IEBC / Party",
  },
  {
    date: "30 Oct 2026",
    targetDate: "2026-10-30",
    title: "Party nomination rules certification",
    type: "IEBC / Party",
  },
  {
    date: "09 Feb 2027",
    targetDate: "2027-02-09",
    title: "Public officer resignation deadline",
    type: "Legal / IEBC",
  },
  {
    date: "08 May 2027",
    targetDate: "2027-05-08",
    title: "Party primaries and internal disputes deadline",
    type: "Party",
  },
  {
    date: "02 Jun 2027",
    targetDate: "2027-06-02",
    title: "MCA nomination period begins",
    type: "IEBC",
  },
  {
    date: "10 Aug 2027",
    targetDate: "2027-08-10",
    title: "General Election",
    type: "Election",
  },
];

const recentActivity: RecentActivity[] = [
  {
    date: "Today",
    text: "Water issue updated",
    type: "Issue",
  },
  {
    date: "Yesterday",
    text: "Youth engagement meeting scheduled",
    type: "Event",
  },
  {
    date: "2 days ago",
    text: "Water access manifesto commitment updated",
    type: "Manifesto",
  },
  {
    date: "3 days ago",
    text: "Community engagement recorded in Area B",
    type: "Engagement",
  },
];

/* -------------------------------------------------------------------------- */
/* Helpers */
/* -------------------------------------------------------------------------- */

const getDaysRemaining = (targetDate: string) => {
  const target = new Date(`${targetDate}T00:00:00`);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const difference = target.getTime() - today.getTime();

  if (difference < 0) return "Passed";

  const days = Math.ceil(
    difference / (1000 * 60 * 60 * 24),
  );

  if (days === 0) return "Today";
  if (days === 1) return "1 day";

  return `${days} days`;
};

const issueRaised = issues.length;

const issueInProgress = issues.filter(
  (issue) => issue.status === "In Progress",
).length;

const issueResolved = issues.filter(
  (issue) => issue.status === "Resolved",
).length;

const completedActivities = activities.filter(
  (activity) => activity.status === "Completed",
).length;

const plannedActivities = activities.filter(
  (activity) => activity.status === "Planned",
).length;

const manifestoCompleted = manifesto.filter(
  (item) => item.status === "Completed",
).length;

const manifestoInProgress = manifesto.filter(
  (item) => item.status === "In Progress",
).length;

const supporterDifference =
  currentSupporters - previousVoterBaseline;

/* -------------------------------------------------------------------------- */
/* Component */
/* -------------------------------------------------------------------------- */

const Dashboard = () => {
  return (
    <Page>
      <Container>
        {/* ---------------------------------------------------------------- */}
        {/* Header */}
        {/* ---------------------------------------------------------------- */}

        <Header>
          <div>
            <Eyebrow>Shimanzi/Ganjoni WARD ACCOUNTABILITY</Eyebrow>

            <Title>MCA Dashboard</Title>

            <Subtitle>
              Monitor community support, issues, engagement,
              activities and manifesto progress from one place.
            </Subtitle>
          </div>

          <HeaderActions>
            <Button variant="secondary">
              Export Report
            </Button>

            <Button>+ Add Update</Button>
          </HeaderActions>
        </Header>

        {/* ---------------------------------------------------------------- */}
        {/* Candidate / Election Overview */}
        {/* ---------------------------------------------------------------- */}

        <ProfileCard>
          <ProfileLeft>
            <Avatar>MC</Avatar>

            <div>
              <ProfileName>
                Hon Huka / MCA Office
              </ProfileName>

              <ProfileMeta>
                Shimanzi/Ganjoni • Mombasa • Kenya
              </ProfileMeta>

              <Tags>
                <Tag>2027 Election</Tag>
                <Tag>Ward Accountability</Tag>
              </Tags>
            </div>
          </ProfileLeft>

          <ElectionCountdown>
            <SmallLabel>GENERAL ELECTION</SmallLabel>

            <Countdown>10 Aug 2027</Countdown>

            <CountdownBadge>
              {getDaysRemaining("2027-08-10")}
            </CountdownBadge>
          </ElectionCountdown>
        </ProfileCard>

        {/* ---------------------------------------------------------------- */}
        {/* Main Overview */}
        {/* ---------------------------------------------------------------- */}

        <StatsGrid>
          <StatCard>
            <StatLabel>Current Supporters</StatLabel>

            <StatValue>
              {currentSupporters.toLocaleString()}
            </StatValue>

            <StatDescription>
              {supporterDifference >= 0 ? "+" : ""}
              {supporterDifference.toLocaleString()} against previous
              voter baseline
            </StatDescription>
          </StatCard>

          <StatCard>
            <StatLabel>Previous Voter Baseline</StatLabel>

            <StatValue>
              {previousVoterBaseline.toLocaleString()}
            </StatValue>

            <StatDescription>
              Previous election/register reference
            </StatDescription>
          </StatCard>

          <StatCard>
            <StatLabel>Community Issues</StatLabel>

            <StatValue>
              {issueResolved}/{issueRaised}
            </StatValue>

            <StatDescription>
              {issueResolved} resolved · {issueInProgress} in progress
            </StatDescription>
          </StatCard>

          <StatCard>
            <StatLabel>Activities</StatLabel>

            <StatValue>
              {completedActivities}/{activities.length}
            </StatValue>

            <StatDescription>
              {plannedActivities} upcoming
            </StatDescription>
          </StatCard>
        </StatsGrid>

        {/* ---------------------------------------------------------------- */}
        {/* Main Grid */}
        {/* ---------------------------------------------------------------- */}

        <MainGrid>
          <MainColumn>
            {/* ============================================================ */}
            {/* Community Issues */}
            {/* ============================================================ */}

            <SectionHeader>
              <div>
                <SectionTitle>Community Issues</SectionTitle>

                <SectionDescription>
                  Track issues from being raised through resolution.
                </SectionDescription>
              </div>

              <TextButton>View all</TextButton>
            </SectionHeader>

            <Card>
              <IssueHeader>
                <span>Issue</span>
                <span>Area</span>
                <span>Status</span>
              </IssueHeader>

              {issues.map((issue) => (
                <IssueRow key={issue.title}>
                  <IssueMain>
                    <IssueTitle>{issue.title}</IssueTitle>

                    <IssueCategory>
                      {issue.category} · Updated {issue.lastUpdate}
                    </IssueCategory>
                  </IssueMain>

                  <IssueArea>{issue.area}</IssueArea>

                  <StatusBadge status={issue.status}>
                    {issue.status}
                  </StatusBadge>
                </IssueRow>
              ))}
            </Card>

            {/* ============================================================ */}
            {/* Community Engagement */}
            {/* ============================================================ */}

            <SectionHeader>
              <div>
                <SectionTitle>
                  Community Engagement
                </SectionTitle>

                <SectionDescription>
                  Record where discussions happened and the main
                  concerns raised.
                </SectionDescription>
              </div>

              <TextButton>View all</TextButton>
            </SectionHeader>

            <Card>
              {engagements.map((engagement) => (
                <EngagementRow
                  key={`${engagement.area}-${engagement.date}`}
                >
                  <EngagementDate>
                    {engagement.date}
                  </EngagementDate>

                  <EngagementMain>
                    <EngagementArea>
                      {engagement.area}
                    </EngagementArea>

                    <EngagementDiscussion>
                      {engagement.discussion}
                    </EngagementDiscussion>

                    <EngagementProblem>
                      Biggest problem:{" "}
                      {engagement.biggestProblem}
                    </EngagementProblem>
                  </EngagementMain>

                  <SimpleStatus>
                    {engagement.status}
                  </SimpleStatus>
                </EngagementRow>
              ))}
            </Card>

            {/* ============================================================ */}
            {/* Activities & Events */}
            {/* ============================================================ */}

            <SectionHeader>
              <div>
                <SectionTitle>
                  Activities & Events
                </SectionTitle>

                <SectionDescription>
                  Meetings, barazas, consultations and community
                  visits.
                </SectionDescription>
              </div>

              <TextButton>Manage</TextButton>
            </SectionHeader>

            <Card>
              {activities.map((activity) => (
                <ActivityRow
                  key={`${activity.title}-${activity.date}`}
                >
                  <ActivityDate>
                    {activity.date}
                  </ActivityDate>

                  <ActivityMain>
                    <ActivityTitle>
                      {activity.title}
                    </ActivityTitle>

                    <ActivityMeta>
                      {activity.type} · {activity.location}
                    </ActivityMeta>
                  </ActivityMain>

                  <ActivityStatus status={activity.status}>
                    {activity.status}
                  </ActivityStatus>
                </ActivityRow>
              ))}
            </Card>

            {/* ============================================================ */}
            {/* Manifesto */}
            {/* ============================================================ */}

            <SectionHeader>
              <div>
                <SectionTitle>Manifesto</SectionTitle>

                <SectionDescription>
                  Track commitments and their implementation.
                </SectionDescription>
              </div>

              <TextButton>View manifesto</TextButton>
            </SectionHeader>

            <Card>
              <ManifestoSummary>
                <ManifestoStat>
                  <ManifestoNumber>
                    {manifesto.length}
                  </ManifestoNumber>

                  <ManifestoLabel>
                    Commitments
                  </ManifestoLabel>
                </ManifestoStat>

                <ManifestoStat>
                  <ManifestoNumber>
                    {manifestoInProgress}
                  </ManifestoNumber>

                  <ManifestoLabel>
                    In progress
                  </ManifestoLabel>
                </ManifestoStat>

                <ManifestoStat>
                  <ManifestoNumber>
                    {manifestoCompleted}
                  </ManifestoNumber>

                  <ManifestoLabel>
                    Completed
                  </ManifestoLabel>
                </ManifestoStat>
              </ManifestoSummary>

              {manifesto.map((item) => (
                <ManifestoRow key={item.title}>
                  <ManifestoMain>
                    <ManifestoTitle>
                      {item.title}
                    </ManifestoTitle>

                    <ManifestoArea>
                      {item.area}
                    </ManifestoArea>
                  </ManifestoMain>

                  <ProgressContainer>
                    <ProgressTrack>
                      <ProgressBar
                        progress={item.progress}
                      />
                    </ProgressTrack>

                    <ProgressText>
                      {item.progress}%
                    </ProgressText>
                  </ProgressContainer>

                  <ManifestoStatus status={item.status}>
                    {item.status}
                  </ManifestoStatus>
                </ManifestoRow>
              ))}
            </Card>
          </MainColumn>

          {/* ---------------------------------------------------------------- */}
          {/* Sidebar */}
          {/* ---------------------------------------------------------------- */}

          <SideColumn>
          
           

            {/* ============================================================ */}
            {/* Election Calendar */}
            {/* ============================================================ */}

            <SectionHeader>
              <div>
                <SectionTitle>
                  Election Calendar
                </SectionTitle>

                <SectionDescription>
                  Important upcoming election dates.
                </SectionDescription>
              </div>
            </SectionHeader>

            <Card>
              {electionDates.slice(0, 4).map((item) => (
                <CalendarItem key={item.targetDate}>
                  <CalendarTop>
                    <CalendarDate>
                      {item.date}
                    </CalendarDate>

                    <CountdownBadge>
                      {getDaysRemaining(item.targetDate)}
                    </CountdownBadge>
                  </CalendarTop>

                  <CalendarTitle>
                    {item.title}
                  </CalendarTitle>

                  <CalendarType>
                    {item.type}
                  </CalendarType>
                </CalendarItem>
              ))}

              <CalendarFooter>
                View full election calendar →
              </CalendarFooter>
            </Card>

            {/* ============================================================ */}
            {/* Recent Activity */}
            {/* ============================================================ */}

            <SectionHeader>
              <div>
                <SectionTitle>
                  Recent Activity
                </SectionTitle>

                <SectionDescription>
                  Latest changes across the dashboard.
                </SectionDescription>
              </div>
            </SectionHeader>

            <Card>
              {recentActivity.map((activity, index) => (
                <RecentRow
                  key={`${activity.date}-${activity.text}`}
                >
                  <RecentDot />

                  <RecentMain>
                    <RecentText>
                      {activity.text}
                    </RecentText>

                    <RecentMeta>
                      {activity.type} · {activity.date}
                    </RecentMeta>
                  </RecentMain>
                </RecentRow>
              ))}
            </Card>
          </SideColumn>
        </MainGrid>
      </Container>
    </Page>
  );
};

/* -------------------------------------------------------------------------- */
/* Styles */
/* -------------------------------------------------------------------------- */

const Page = styled.div`
  min-height: 100vh;
  background: #f6f7f9;
  color: #17202a;

  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
`;

const Container = styled.main`
  width: min(1440px, calc(100% - 40px));
  margin: 0 auto;
  padding: 32px 0 60px;

  @media (max-width: 768px) {
    width: calc(100% - 24px);
    padding-top: 24px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 28px;

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Eyebrow = styled.div`
  color: #667085;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 7px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 1.15;
  letter-spacing: -0.03em;
`;

const Subtitle = styled.p`
  margin: 8px 0 0;
  color: #667085;
  font-size: 14px;
  max-width: 680px;
  line-height: 1.6;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    width: 100%;

    button {
      flex: 1;
    }
  }
`;

const Button = styled.button<{ variant?: "secondary" }>`
  border: 1px solid
    ${({ variant }) =>
      variant === "secondary" ? "#d0d5dd" : "#17202a"};

  background: ${({ variant }) =>
    variant === "secondary" ? "#ffffff" : "#17202a"};

  color: ${({ variant }) =>
    variant === "secondary" ? "#344054" : "#ffffff"};

  border-radius: 8px;
  padding: 10px 15px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.88;
  }
`;

const ProfileCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 14px;
  padding: 22px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const ProfileLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Avatar = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 12px;
  background: #eef2f6;

  display: grid;
  place-items: center;

  font-size: 15px;
  font-weight: 800;
  color: #344054;
`;

const ProfileName = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const ProfileMeta = styled.div`
  margin-top: 4px;
  color: #667085;
  font-size: 13px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 9px;
`;

const Tag = styled.span`
  padding: 4px 8px;
  background: #f2f4f7;
  border-radius: 5px;
  color: #475467;
  font-size: 11px;
  font-weight: 600;
`;

const ElectionCountdown = styled.div`
  text-align: right;

  @media (max-width: 700px) {
    text-align: left;
  }
`;

const SmallLabel = styled.div`
  color: #667085;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

const Countdown = styled.div`
  margin-top: 5px;
  font-size: 19px;
  font-weight: 750;
`;

const CountdownBadge = styled.span`
  display: inline-block;
  margin-top: 6px;
  padding: 5px 8px;
  border-radius: 5px;
  background: #f2f4f7;
  color: #344054;
  font-size: 10px;
  font-weight: 700;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 28px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 12px;
  padding: 18px;
`;

const StatLabel = styled.div`
  color: #667085;
  font-size: 12px;
  font-weight: 600;
`;

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 750;
  margin: 8px 0 4px;
`;

const StatDescription = styled.div`
  color: #98a2b3;
  font-size: 11px;
  line-height: 1.4;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(320px, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const MainColumn = styled.div`
  min-width: 0;
`;

const SideColumn = styled.aside`
  min-width: 0;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin: 25px 0 12px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 17px;
  letter-spacing: -0.01em;
`;

const SectionDescription = styled.p`
  margin: 4px 0 0;
  color: #667085;
  font-size: 12px;
  line-height: 1.4;
`;

const TextButton = styled.button`
  border: 0;
  background: transparent;
  color: #344054;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  padding: 4px;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #eaecf0;
  border-radius: 12px;
  overflow: hidden;
`;

/* -------------------------------------------------------------------------- */
/* Issues */
/* -------------------------------------------------------------------------- */

const IssueHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 100px 110px;
  gap: 15px;
  padding: 11px 17px;

  background: #f9fafb;
  border-bottom: 1px solid #eaecf0;

  color: #667085;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 600px) {
    grid-template-columns: 1fr auto;

    span:nth-child(2) {
      display: none;
    }
  }
`;

const IssueRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 100px 110px;
  align-items: center;
  gap: 15px;

  padding: 15px 17px;
  border-bottom: 1px solid #f2f4f7;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr auto;

    > :nth-child(2) {
      display: none;
    }
  }
`;

const IssueMain = styled.div`
  min-width: 0;
`;

const IssueTitle = styled.div`
  font-size: 13px;
  font-weight: 650;
`;

const IssueCategory = styled.div`
  margin-top: 4px;
  color: #98a2b3;
  font-size: 10px;
`;

const IssueArea = styled.div`
  color: #667085;
  font-size: 11px;
`;

const StatusBadge = styled.span<{
  status: IssueStatus;
}>`
  width: fit-content;
  padding: 5px 8px;
  border-radius: 5px;

  background: ${({ status }) =>
    status === "Resolved"
      ? "#ecfdf3"
      : status === "In Progress"
        ? "#fffaeb"
        : "#f2f4f7"};

  color: ${({ status }) =>
    status === "Resolved"
      ? "#027a48"
      : status === "In Progress"
        ? "#b54708"
        : "#475467"};

  font-size: 10px;
  font-weight: 700;
`;

/* -------------------------------------------------------------------------- */
/* Engagement */
/* -------------------------------------------------------------------------- */

const EngagementRow = styled.div`
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr) auto;
  gap: 15px;
  align-items: flex-start;

  padding: 16px 17px;
  border-bottom: 1px solid #f2f4f7;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr auto;
  }
`;

const EngagementDate = styled.div`
  color: #667085;
  font-size: 10px;
  font-weight: 700;
`;

const EngagementMain = styled.div`
  min-width: 0;
`;

const EngagementArea = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

const EngagementDiscussion = styled.div`
  margin-top: 3px;
  font-size: 13px;
  font-weight: 600;
`;

const EngagementProblem = styled.div`
  margin-top: 5px;
  color: #667085;
  font-size: 11px;
`;

const SimpleStatus = styled.span`
  padding: 5px 8px;
  border-radius: 5px;
  background: #f2f4f7;
  color: #475467;
  font-size: 10px;
  font-weight: 700;
`;

/* -------------------------------------------------------------------------- */
/* Activities */
/* -------------------------------------------------------------------------- */

const ActivityRow = styled.div`
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr) auto;
  align-items: center;
  gap: 15px;

  padding: 15px 17px;
  border-bottom: 1px solid #f2f4f7;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr auto;
  }
`;

const ActivityDate = styled.div`
  color: #667085;
  font-size: 10px;
  font-weight: 700;
`;

const ActivityMain = styled.div`
  min-width: 0;
`;

const ActivityTitle = styled.div`
  font-size: 13px;
  font-weight: 650;
`;

const ActivityMeta = styled.div`
  margin-top: 4px;
  color: #98a2b3;
  font-size: 10px;
`;

const ActivityStatus = styled.span<{
  status: Activity["status"];
}>`
  padding: 5px 8px;
  border-radius: 5px;

  background: ${({ status }) =>
    status === "Completed"
      ? "#ecfdf3"
      : status === "Planned"
        ? "#eff8ff"
        : "#fef3f2"};

  color: ${({ status }) =>
    status === "Completed"
      ? "#027a48"
      : status === "Planned"
        ? "#175cd3"
        : "#b42318"};

  font-size: 10px;
  font-weight: 700;
`;

/* -------------------------------------------------------------------------- */
/* Manifesto */
/* -------------------------------------------------------------------------- */

const ManifestoSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #eaecf0;
`;

const ManifestoStat = styled.div`
  padding: 15px;
  text-align: center;
  border-right: 1px solid #eaecf0;

  &:last-child {
    border-right: 0;
  }
`;

const ManifestoNumber = styled.div`
  font-size: 20px;
  font-weight: 750;
`;

const ManifestoLabel = styled.div`
  margin-top: 3px;
  color: #98a2b3;
  font-size: 10px;
`;

const ManifestoRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 140px auto;
  align-items: center;
  gap: 18px;

  padding: 15px 17px;
  border-bottom: 1px solid #f2f4f7;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr auto;
  }
`;

const ManifestoMain = styled.div`
  min-width: 0;
`;

const ManifestoTitle = styled.div`
  font-size: 13px;
  font-weight: 650;
`;

const ManifestoArea = styled.div`
  margin-top: 3px;
  color: #98a2b3;
  font-size: 10px;
`;

const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const ProgressTrack = styled.div`
  flex: 1;
  height: 6px;
  border-radius: 99px;
  background: #eaecf0;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background: #344054;
  border-radius: inherit;
`;

const ProgressText = styled.span`
  color: #667085;
  font-size: 10px;
  font-weight: 700;
`;

const ManifestoStatus = styled.span<{
  status: ManifestoItem["status"];
}>`
  white-space: nowrap;

  padding: 5px 8px;
  border-radius: 5px;

  background: ${({ status }) =>
    status === "Completed"
      ? "#ecfdf3"
      : status === "In Progress"
        ? "#fffaeb"
        : "#f2f4f7"};

  color: ${({ status }) =>
    status === "Completed"
      ? "#027a48"
      : status === "In Progress"
        ? "#b54708"
        : "#475467"};

  font-size: 10px;
  font-weight: 700;
`;

/* -------------------------------------------------------------------------- */
/* Supporter Snapshot */
/* -------------------------------------------------------------------------- */

const SupporterBlock = styled.div`
  padding: 17px;
  border-bottom: 1px solid #f2f4f7;
`;

const SupporterLabel = styled.div`
  color: #667085;
  font-size: 11px;
  font-weight: 600;
`;

const SupporterValue = styled.div`
  margin-top: 5px;
  font-size: 24px;
  font-weight: 750;
`;

const DifferenceBlock = styled.div`
  padding: 17px;
  background: #f9fafb;
`;

const DifferenceLabel = styled.div`
  color: #667085;
  font-size: 11px;
  font-weight: 600;
`;

const DifferenceValue = styled.div`
  margin-top: 4px;
  font-size: 18px;
  font-weight: 750;
`;

/* -------------------------------------------------------------------------- */
/* Election Calendar */
/* -------------------------------------------------------------------------- */

const CalendarItem = styled.div`
  padding: 14px 16px;
  border-bottom: 1px solid #f2f4f7;

  &:last-of-type {
    border-bottom: 0;
  }
`;

const CalendarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const CalendarDate = styled.div`
  color: #667085;
  font-size: 10px;
  font-weight: 700;
`;

const CalendarTitle = styled.div`
  margin-top: 5px;
  font-size: 12px;
  line-height: 1.4;
  font-weight: 650;
`;

const CalendarType = styled.div`
  margin-top: 4px;
  color: #98a2b3;
  font-size: 10px;
`;

const CalendarFooter = styled.div`
  padding: 13px 16px;
  border-top: 1px solid #eaecf0;

  color: #344054;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
`;

/* -------------------------------------------------------------------------- */
/* Recent Activity */
/* -------------------------------------------------------------------------- */

const RecentRow = styled.div`
  display: flex;
  gap: 11px;
  padding: 14px 16px;
  border-bottom: 1px solid #f2f4f7;

  &:last-child {
    border-bottom: 0;
  }
`;

const RecentDot = styled.div`
  flex: 0 0 auto;
  width: 7px;
  height: 7px;
  margin-top: 5px;
  border-radius: 50%;
  background: #667085;
`;

const RecentMain = styled.div`
  min-width: 0;
`;

const RecentText = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const RecentMeta = styled.div`
  margin-top: 4px;
  color: #98a2b3;
  font-size: 10px;
`;

export default Dashboard;