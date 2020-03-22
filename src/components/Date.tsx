import React from 'react'

export const InRange = ({ from, to }: { from: Date, to?: Date }) => <span className="date range">
    {from.toLocaleDateString("en-US")} - {to ? to.toLocaleDateString("en-US") : 'present'}
</span>
export const Since = ({ date }: { date: Date }) => <span className="date since">since {date.toLocaleDateString("en-US")}</span>
export const In = ({ month }: { month: Date }) => <span className="date in">in {month.toLocaleDateString("en-US")}</span>
export const On = ({ date }: { date: Date }) => <span className="date in">on {date.toLocaleDateString("en-US")}</span>