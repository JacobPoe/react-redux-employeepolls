import { _saveQuestion, _saveQuestionAnswer } from './_DATA';

describe('_saveQuestion()', () => {
  const validQuestion = {
    optionOneText: 'Fight 100 duck-sized horses?',
    optionTwoText: 'Fight one horsed-sized duck?',
    author: 'mtsamis'
  }
  
  it('should resolve and return a validly-formatted question object when provided valid data', async () => {
    const result = await _saveQuestion(validQuestion);

    expect(result.id).toBeDefined();
    expect(result.timestamp).toBeDefined();

    expect(result.author).toBeDefined();
    expect(result.author).toEqual(validQuestion.author);

    expect(result.optionOne).toBeDefined();
    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionOne.text).toEqual(validQuestion.optionOneText);

    expect(result.optionTwo).toBeDefined();
    expect(result.optionTwo.votes).toEqual([]);
    expect(result.optionTwo.text).toEqual(validQuestion.optionTwoText);
  })

  const invalidQuestion = {
    optionOneText: 'Fight 100 duck-sized horses?',
    optoinTwoText: 'Fight one horsed-sized duck?',
    author: 'mtsamis'
  }

  it('should reject when provided invalid data', async () => {
    await expect(_saveQuestion(invalidQuestion)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
  })
})

describe('_saveQuestionAnswer()', () => {
  const validAnswer = {
    authedUser: 'mtsamis', 
    qid: 'am8ehyc8byjqgar0jgpub9', 
    answer: 'optionTwo'
  }

  it('should resolve true when provided a valid answer', async () => {
    const result = await _saveQuestionAnswer(validAnswer);
    console.log(result);
    expect(result).toEqual(true);
  })
  
  const invalidAnswer = {
    authedUser: 'mtsamis', 
    qid: 'am8ehyc8byjqgar0jgpub9', 
    answer: ''
  }

  it('should reject when provided an invalid answer', async () => {
    await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual('Please provide authedUser, qid, and answer');
  })
})