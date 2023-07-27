import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Font } from "@react-email/font";
import { Head } from "@react-email/head";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";
import * as React from "react";

type ReportData = {
  number_of_employees: number;
  number_of_weekly_meetings_per_employee: number;
  average_salary_per_employee: number;
  yearly_meeting_hours: string;
  time_percent_spent: string;
  human_expenses: string;
  total_meetings: string;
  cost_per_meeting: string;
  reduce_10_percent: string;
  reduce_20_percent: string;
  reduce_30_percent: string;
  employee_compensation: string;
};

export default function ReportEmail({
  number_of_employees,
  number_of_weekly_meetings_per_employee,
  average_salary_per_employee,
  yearly_meeting_hours,
  time_percent_spent,
  human_expenses,
  total_meetings,
  cost_per_meeting,
  reduce_10_percent,
  reduce_20_percent,
  reduce_30_percent,
  employee_compensation,
}: ReportData) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Text>Thanks for submitting the form!</Text>
      <Text>We know that recurrent meetings are important, but not all.</Text>
      <Text>To find the unnecessary recurrent meetings:</Text>
      <Button
        pX={20}
        pY={12}
        href="https://calendly.com/pperalta/30min"
        style={{ background: "#000", color: "#fff" }}
      >
        Book a call
      </Button>
      <Text>As promised, here is the report:</Text>
      <Hr />
      <Text>About your company</Text>
      <Text>- Number of employees: {number_of_employees}</Text>
      <Text>
        - Average employee compensation: {average_salary_per_employee}
      </Text>
      <Text>
        - Weekly recurrent meetings per employee:{" "}
        {number_of_weekly_meetings_per_employee}
      </Text>
      <Hr />
      <Text>From your submission, every year:</Text>
      <Text>
        - You spend a total of {employee_compensation} in OPEX on your
        employees.
      </Text>
      <Text>
        - Employees are stuck an average of {yearly_meeting_hours} hours in
        recurrent meetings.
      </Text>
      <Text>
        - Employees spend {time_percent_spent}% of their working hours in
        recurrent meetings.
      </Text>
      <Text>- Recurrent meetings cost you a total of {human_expenses}.</Text>
      <Text>
        - Each recurrent meeting costs the company {cost_per_meeting}.
      </Text>
      <Hr />
      <Text>You could EASILY save:</Text>
      <Text>- 10%, and reduce your spend: {reduce_10_percent}</Text>
      <Text>- 20%, and reduce your spend: {reduce_20_percent}</Text>
      <Text>- 30%, and reduce your spend: {reduce_30_percent}</Text>
      <Hr />
      <Text>To find the unnecessary recurrent meetings:</Text>
      <Button
        pX={20}
        pY={12}
        href="https://calendly.com/pperalta/30min"
        style={{ background: "#000", color: "#fff" }}
      >
        Book a call
      </Button>
    </Html>
  );
}
