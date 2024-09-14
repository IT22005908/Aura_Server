export class BaseIdentifier {
    
    private static greetings= [
        "hello",
        "hi",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
        "greetings",
        "what's up",
        "howdy",
        "hi there"
    ];

    private static acceptancePhrases: string[] = [
        "yes",
        "yeah",
        "yup",
        "okay",
        "alright",
        "sure",
        "of course",
        "definitely",
        "affirmative",
        "that's right"
      ];

    private static rejectionPhrases: string[] = [
        "no",
        "nah",
        "nope",
        "not at all",
        "never",
        "I don’t think so",
        "I disagree",
        "absolutely not",
        "negative"
      ];

    static isGreeted(normText:string):boolean{

        return this.greetings.some(greeting =>normText.includes(greeting))
    }

    static isAcceptance(normText: string): boolean {

        return this.acceptancePhrases.some(phrase => normText.includes(phrase));
    }

    static isRejection(normText: string): boolean {
        return this.rejectionPhrases.some(phrase => normText.includes(phrase));
    }
}