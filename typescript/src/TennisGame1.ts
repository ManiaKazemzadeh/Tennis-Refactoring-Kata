import {TennisGame} from './TennisGame';

const scoreMap = {
    0: "Love",
    1: "Fifteen",
    2: "Thirty",
    3: "Forty"
}

const getDrawOutput = (score: number) => {
    return {
        0: "Love-All",
        1: "Fifteen-All",
        2: "Thirty-All",
    }[score] || "Deuce";

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
        if (this.m_score1 === this.m_score2) {
            return getDrawOutput(this.m_score1)
        }

        if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            const minusResult: number = this.m_score1 - this.m_score2;
            if (minusResult === 1) return 'Advantage player1';
            if (minusResult === -1) return 'Advantage player2';
            if (minusResult >= 2) return 'Win for player1';
            return 'Win for player2';
        }

        let score: string = '';
        let tempScore: number = 0;

        for (let i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += '-';
                tempScore = this.m_score2;
            }
            score += scoreMap[tempScore]

        }
        return score;
    }
}
