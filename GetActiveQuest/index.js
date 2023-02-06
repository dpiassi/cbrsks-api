const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')

dayjs.extend(utc)

module.exports = async (context, req) => {
  
  try {
    const quest = context.bindings.inputActiveQuest[0]
    const today = dayjs().utc().unix()
    const previewSoon = today >= quest.comingSoonDate && today < quest.startDate
    const alreadyStarted = !(today >= quest.startDate)
    const isItOverYet = !(today <= quest.endDate)

    if (previewSoon) {
      return {
        status: 200,
        body: {
          status: 200,
          quest: {
            comingSoonDate: quest.comingSoonDate,
            startDate: quest.startDate,
            labels: {
              button: quest.labels.button,
              bar: "Coming soon"
            }
          }
        }
      }
    }

    if (alreadyStarted) throw new Error('The day to start the quest has not arrived yet')
    if (isItOverYet) throw new Error('This quest is over')
  
    delete quest.comingSoonDate

    return {
      status: 200,
      body: {
        status: 200,
        quest
      }
    }
  } catch (error) {
    context.log('GetActiveQuest', 'ERROR', error)
    return {
      status: 500
    }
  }
}