import axios from 'axios'

export async function getCalendar() {
  try {
    const response = await axios.get(
      'https://calendar.google.com/calendar/ical/86oup09opi66vbhshrftu4uijs%40group.calendar.google.com/public/basic.ics',
    )
    return response.data
  } catch (error) {
    console.error('Error fetching calendar:', error)
    throw error
  }
}
