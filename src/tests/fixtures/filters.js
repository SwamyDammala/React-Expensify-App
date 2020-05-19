import moment from 'moment'

const filter={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const altfilter={
    text:'re',
    sortBy:'amount',
    startDate:moment(0),
    endDate:moment(0).add(3, 'days')
}

export {filter,altfilter}