import { TennisGame } from './TennisGame';

const scoreMap = {
  0: "Love",
  1: "Fifteen",
  2: "Thirty",
  3: "Forty"
}

const drawMap = {
  0: "Love-All",
  1: "Fifteen-All",
  2: "Thirty-All",
  3: "Deuce"
}

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }

  getScore(): string {
    let score: string = '';
    let tempScore: number = 0;
    if (this.m_score1 === this.m_score2) {
      this.m_score1 = drawMap[this.m_score1]
    }
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      const minusResult: number = this.m_score1 - this.m_score2;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    }
    else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.m_score1;
        else { score += '-'; tempScore = this.m_score2; }
        score += scoreMap[tempScore]
      }
    }
    return score;
  }
}
