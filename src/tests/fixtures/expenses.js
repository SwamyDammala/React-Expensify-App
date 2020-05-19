import moment from 'moment'

const expenses=[{
        id:'1',
        description:'gum',
        notes:'',
        amount:400,
        createdAt:0
        },
        {
        id:'2',
        description:'rent',
        notes:'',
        amount:23000,
        createdAt:moment(0).subtract(4, 'days').valueOf()
        },
        {
        id:'3',
        description:'Credit Card',
        notes:'',
        amount:29000,
        createdAt:moment(0).add(4, 'days').valueOf()
        }]

export default expenses        