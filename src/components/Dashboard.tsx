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
  issueCategory: string;
  target: string;
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

const previousVoterBaseline = 18556;
const currentSupporters = 324;

const issues: Issue[] = [
  {
    title: "Garbage Management and Sanitation",
    area: "Highlevel, Asian quarters and Ganjoni",
    category: "Environment",
    status: "In Progress",
    lastUpdate: "2 days ago",
  },
  {
    title: "Community Violence",
    area: "King'orani and surrounding estates",
    category: "Security",
    status: "Raised",
    lastUpdate: "5 days ago",
  },
  {
    title: "Youth employment opportunities",
    area: "Across the ward",
    category: "Youth",
    status: "Resolved",
    lastUpdate: "1 week ago",
  },
  {
    title: "Land, Roads and Public space management",
    area: "Shimanzi Railways and neighbouring parastatal lines",
    category: "Governance",
    status: "Raised",
    lastUpdate: "1 week ago",
  },
];

const engagements: Engagement[] = [
  {
    area: "Sacred Heart Primary School",
    date: "3672 Voters",
    discussion: "Ganjoni",
    biggestProblem: "Garbage Management and Sanitation",
    status: "Open",
  },
  {
    area: "Makupa Primary School",
    date: "3672 Voters",
    discussion: "Majengo",
    biggestProblem: "Poor drainage during heavy rain",
    status: "Open",
  },
  {
    area: "Makande KPA Nursery School",
    date: "1854 Voters",
    discussion: "Shimanzi",
    biggestProblem: "Poor drainage during heavy rain and Limited employment opportunities",
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
    issueCategory: "Youth & Employment",
    target: "Increase youth access to employment and economic opportunities",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Education",
    target: "Improve access to educational and skills-development opportunities",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Healthcare",
    target: "Improve access to quality healthcare services",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Water & Sanitation",
    target: "Improve access to clean water, drainage and sanitation",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Roads & Infrastructure",
    target: "Improve roads, drainage, lighting and public facilities",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Business & Livelihoods",
    target: "Support local businesses, traders and income-generating activities",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Environment & Cleanliness",
    target: "Improve waste management, cleanliness and environmental protection",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Security",
    target: "Strengthen community safety and coordination on security concerns",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Housing & Settlements",
    target: "Advocate for improved basic services and living conditions",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Women Empowerment",
    target: "Expand women's access to skills, entrepreneurship and economic opportunities",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Persons with Disabilities",
    target: "Promote inclusion, accessibility and participation in ward programs",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Sports & Talent",
    target: "Support sports, talent development and youth recreation",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Community Participation",
    target: "Strengthen resident participation in ward planning and development",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Accountability & Transparency",
    target: "Track ward projects, implementation and community feedback",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
  {
    issueCategory: "Digital Access",
    target: "Expand digital literacy, technology access and digital opportunities",
    area: "Ward-wide",
    progress: 0,
    status: "Planned",
  },
];

const electionDates: ElectionDate[] = [
  {
    date: "12 Nov 2026",
    targetDate: "2026-11-12",
    title: "Submission of party nomination rules",
    type: "Political Party / IEBC",
  },
  {
    date: "26 Nov 2026",
    targetDate: "2026-11-26",
    title: "Nomination rules compliance certificates",
    type: "IEBC / ORPP",
  },
  {
    date: "10 Dec 2026",
    targetDate: "2026-12-10",
    title: "Election fundraising deadline",
    type: "IEBC / EACC / Parliament",
  },
  {
    date: "10 Feb 2027",
    targetDate: "2027-02-10",
    title: "Voter register audit / civil servant deadline",
    type: "IEBC / PSC",
  },
  {
    date: "12 Apr 2027",
    targetDate: "2027-04-12",
    title: "Election technology procurement deadline",
    type: "IEBC / CAK / ICT Authority",
  },
  {
    date: "21 Apr 2027",
    targetDate: "2027-04-21",
    title: "Party primary candidates and dates submission",
    type: "Political Party / IEBC",
  },
  {
    date: "28 Apr 2027",
    targetDate: "2027-04-28",
    title: "Outer limit for party primary submissions",
    type: "Political Party / IEBC",
  },
  {
    date: "10 May 2027",
    targetDate: "2027-05-10",
    title: "Political party resignation deadline",
    type: "Political Party / ORPP",
  },
  {
    date: "12 May 2027",
    targetDate: "2027-05-12",
    title: "Voter register inspection opens",
    type: "IEBC",
  },
  {
    date: "11 Jun 2027",
    targetDate: "2027-06-11",
    title: "Voter register inspection closes / technology testing deadline",
    type: "IEBC / ICT",
  },
  {
    date: "26 Jun 2027",
    targetDate: "2027-06-26",
    title: "Independent candidate nomination milestone",
    type: "IEBC / Independent Candidates",
  },
  {
    date: "27 Jul 2027",
    targetDate: "2027-07-27",
    title: "National and county chief agents deadline",
    type: "Political Parties / Candidates / IEBC",
  },
  {
    date: "10 Aug 2027",
    targetDate: "2027-08-10",
    title: "General Election",
    type: "IEBC / Political Parties / Candidates",
  },
  {
    date: "17 Aug 2027",
    targetDate: "2027-08-17",
    title: "Presidential results declaration deadline",
    type: "IEBC",
  },
  {
    date: "24 Aug 2027",
    targetDate: "2027-08-24",
    title: "Presidential election petition deadline",
    type: "Supreme Court / IEBC",
  },
  {
    date: "07 Sep 2027",
    targetDate: "2027-09-07",
    title: "Election case determination deadline",
    type: "Judiciary",
  },
  {
    date: "09 Sep 2027",
    targetDate: "2027-09-09",
    title: "Presidential runoff / special-seat allocation milestone",
    type: "IEBC / Political Parties",
  },
  {
    date: "09 Mar 2028",
    targetDate: "2028-03-09",
    title: "Other election petition timeline",
    type: "IEBC / Judiciary",
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
                {/* <Tag>Ward Accountability</Tag> */}
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
              <small style={{color:"red"}}> <b>{supporterDifference >= 0 ? "+" : ""}
              {supporterDifference.toLocaleString()}</b> </small> against previous
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
                  Strategic and Analytical Community Engagement
                </SectionTitle>

                <SectionDescription>
                  Ganjoni/Shimanzi ward campaign territory analysis.
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
                 Campaign Activities & Events
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
                  Issue categories and the development targets attached to each.
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
                    Targets
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
                <ManifestoRow key={item.issueCategory}>
                  <ManifestoMain>
                    <ManifestoCategory>
                      {item.issueCategory}
                    </ManifestoCategory>

                    <ManifestoTitle>
                      {item.target}
                    </ManifestoTitle>

                    <ManifestoArea>
                      Target area: {item.area}
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
                  Election milestones, deadlines and responsible parties.
                </SectionDescription>
              </div>
            </SectionHeader>

            <Card>
              {electionDates.map((item) => (
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

const ManifestoCategory = styled.div`
  margin-bottom: 4px;
  color: #667085;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const ManifestoTitle = styled.div`
  font-size: 13px;
  font-weight: 650;
  line-height: 1.45;
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

// const SupporterBlock = styled.div`
//   padding: 17px;
//   border-bottom: 1px solid #f2f4f7;
// `;

// const SupporterLabel = styled.div`
//   color: #667085;
//   font-size: 11px;
//   font-weight: 600;
// `;

// const SupporterValue = styled.div`
//   margin-top: 5px;
//   font-size: 24px;
//   font-weight: 750;
// `;

// const DifferenceBlock = styled.div`
//   padding: 17px;
//   background: #f9fafb;
// `;

// const DifferenceLabel = styled.div`
//   color: #667085;
//   font-size: 11px;
//   font-weight: 600;
// `;

// const DifferenceValue = styled.div`
//   margin-top: 4px;
//   font-size: 18px;
//   font-weight: 750;
// `;

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