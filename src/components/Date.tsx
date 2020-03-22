import React from 'react'
import moment from 'moment'
moment.locale('en');
export const InRange = ({ from, to }: { from: Date, to?: Date }) => <span className="date range">
    {moment(from).format("MMM YYYY")} - {to ? moment(to).add(1, 'months').format("MMM YYYY") : 'present'}
</span>
export const Since = ({ date }: { date: Date }) => <span className="date since">since {moment(date).format("ll")}</span>
export const In = ({ month }: { month: Date }) => <span className="date in">in {moment(month).format("MMM YYYY")}</span>
export const On = ({ date }: { date: Date }) => <span className="date in">on {moment(date).format("ll")}</span>