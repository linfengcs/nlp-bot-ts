
/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */



import { Session } from "../types/session";

/**
 * Abstract class for a conversation context of a chatbot.
 * The conversation context is the responsible for storing and retrieving
 * the context scope variables based on the current conversation.
 * The getConversationContext receive the session of the chatbot, and must return
 * a promise with the context in the resolve.
 */

class ConversationContext {
  private settings: object;

  /**
   * Constructor of the class.
   * @param {Object} settings Settings for the instance.
   */
  constructor(settings: object) {
    this.settings = settings || {};
  }

  /**
   * Given a session instance of a chatbot, return the conversation identifier.
   * @param {Object} session Session instance of a message of chatbot.
   * @returns {String} Identifier of the conversation.
   */
  public getConversationId(session: Session): string | undefined {
    if (session?.message?.address?.conversation) {
      return session.message.address.conversation.id;
    }
    if (session?._activity?.conversation) {
      return session._activity.conversation.id;
    }
    return undefined;
  }
}

export default ConversationContext;
