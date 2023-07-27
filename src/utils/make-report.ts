const WEEKS_IN_A_YEAR = 52;
const HOURS_IN_A_YEAR = 50 * WEEKS_IN_A_YEAR;

const prettifyNumber = (num: number, currency = true) => {
  const round_string = Math.round(num).toString();
  const prefix = currency ? "$" : "";

  return prefix + round_string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

interface FormData {
  employees: number;
  meetings: number;
  salary: number;
  email: string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ employees, meetings, salary, email }: FormData) => {
  // Percentage of time spent on recurrent meetings
  const yearly_meeting_hours = meetings * WEEKS_IN_A_YEAR;
  const time_spent_on_meetings = yearly_meeting_hours / HOURS_IN_A_YEAR;

  // Key employee OPEX
  const human_expenses = employees * salary;

  // Average cost per meeting
  const total_meetings_cost = human_expenses * time_spent_on_meetings;
  const cost_per_meeting_hour = total_meetings_cost / yearly_meeting_hours;

  return {
    yearly_meeting_hours: prettifyNumber(yearly_meeting_hours, false),
    time_percent_spent: prettifyNumber(time_spent_on_meetings * 100, false),
    human_expenses: prettifyNumber(human_expenses),
    total_meetings: prettifyNumber(total_meetings_cost),
    cost_per_meeting: prettifyNumber(cost_per_meeting_hour),
    reduce_10_percent: prettifyNumber(total_meetings_cost * 0.1),
    reduce_20_percent: prettifyNumber(total_meetings_cost * 0.2),
    reduce_30_percent: prettifyNumber(total_meetings_cost * 0.3),
    employee_compensation: prettifyNumber(salary),
    email: email.toLowerCase(),
  };
};
