'use strict'
class User {
  constructor () {
    this.rank = -8 // valid values are between -8 and 8
    this.progress = 0 // valid range 0-100
  }

  incRank () {
    if (this.rank === -1) {
      this.rank = 1
    } else {
      this.rank++
    }
    return this.rank
  }

  incProgress (activityRank) {
    if (activityRank < -8 || activityRank > 8 || activityRank === 0) {
      throw new Error()
    }
    if (this.rank < 0 && activityRank > 0) {
      activityRank--
    }
    if (this.rank > 0 && activityRank < 0) {
      activityRank++
    }
    if (this.rank === activityRank) {
      this.progress += 3
    }
    if (this.rank - 1 === activityRank) {
      this.progress += 1
    }
    if (this.rank - 2 >= activityRank) {
      this.progress += 0
    }
    if (this.rank < activityRank) {
      const diff = activityRank - this.rank
      this.progress += (10 * diff * diff)
    }
    while (this.progress >= 100 && this.rank < 8) {
      if (++this.rank === 0) {
        this.rank++
      }
      this.progress -= 100
    }
    if (this.rank === 8) {
      this.progress = 0
    }
  }
}
// incProgress (activityRank) {
//   if (this.rank === 8) {
//     this.progress = 0
//   }
//   // should handle passing a number out of range as the argument
//   if (activityRank < -8 || activityRank > 8 || activityRank === 0) {
//     throw new Error('Activity rank out of range')
//   }

//   if (activityRank === this.rank) {
//     this.progress += 3 // Should be 3, not 1
//   } else if (activityRank < this.rank) {
//     if (Math.abs(activityRank - this.rank === 1)) {
//       this.progress += 1
//     } else {
//       return null
//     }
//   } else {
//     const rankDifference = activityRank - this.rank
//     this.progress += 10 * rankDifference * rankDifference
//   }
//   if (this.progress >= 100) {
//     while (this.progress >= 100) {
//       this.progress -= 100
//       this.incRank()
//     }
//   }
// }
//

const test = new User()
console.log(test.incProgress(1))
console.log(test.progress)
console.log(test.rank)

// console.log(calcDifference(-8, 4))
