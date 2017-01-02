'use strict';

module.exports = function(Twiliomessage) {
    Twiliomessage.disableRemoteMethod("create", false);
    Twiliomessage.disableRemoteMethod("upsert", true);
    Twiliomessage.disableRemoteMethod("updateAll", true);
    Twiliomessage.disableRemoteMethod("updateAttributes", true);

    Twiliomessage.disableRemoteMethod("replaceById", true);
    Twiliomessage.disableRemoteMethod("replace", true);
    Twiliomessage.disableRemoteMethod("replaceOrCreate", true);
    Twiliomessage.disableRemoteMethod("changeStream", true);
    Twiliomessage.disableRemoteMethod("upsertWithWhere", true);

    Twiliomessage.disableRemoteMethod("find", true);
    Twiliomessage.disableRemoteMethod("findById", true);
    Twiliomessage.disableRemoteMethod("findOne", true);

    Twiliomessage.disableRemoteMethod("deleteById", true);

    Twiliomessage.disableRemoteMethod("confirm", true);
    Twiliomessage.disableRemoteMethod("count", true);
    Twiliomessage.disableRemoteMethod("exists", true);
    Twiliomessage.disableRemoteMethod("resetPassword", true);

    Twiliomessage.disableRemoteMethod('__count__accessTokens', true);
    Twiliomessage.disableRemoteMethod('__create__accessTokens', true);
    Twiliomessage.disableRemoteMethod('__delete__accessTokens', true);
    Twiliomessage.disableRemoteMethod('__destroyById__accessTokens', true);
    Twiliomessage.disableRemoteMethod('__findById__accessTokens', true);
    Twiliomessage.disableRemoteMethod('__get__accessTokens', true);
    Twiliomessage.disableRemoteMethod('__updateById__accessTokens', true);
    Twiliomessage.disableRemoteMethod('__patchById', true);
};
