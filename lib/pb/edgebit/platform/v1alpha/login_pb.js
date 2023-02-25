"use strict";
// @generated by protoc-gen-es v1.0.0 with parameter "target=ts,import_extension=none"
// @generated from file edgebit/platform/v1alpha/login.proto (package edgebit.platform.v1alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIAccessTokenLoginResponse = exports.APIAccessTokenLoginRequest = exports.PasswordLoginResponse = exports.PasswordLoginRequest = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from message edgebit.platform.v1alpha.PasswordLoginRequest
 */
class PasswordLoginRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string email = 1;
         */
        this.email = "";
        /**
         * @generated from field: string password = 2;
         */
        this.password = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PasswordLoginRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PasswordLoginRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PasswordLoginRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PasswordLoginRequest, a, b);
    }
}
exports.PasswordLoginRequest = PasswordLoginRequest;
PasswordLoginRequest.runtime = protobuf_1.proto3;
PasswordLoginRequest.typeName = "edgebit.platform.v1alpha.PasswordLoginRequest";
PasswordLoginRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message edgebit.platform.v1alpha.PasswordLoginResponse
 */
class PasswordLoginResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string token = 1;
         */
        this.token = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PasswordLoginResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PasswordLoginResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PasswordLoginResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(PasswordLoginResponse, a, b);
    }
}
exports.PasswordLoginResponse = PasswordLoginResponse;
PasswordLoginResponse.runtime = protobuf_1.proto3;
PasswordLoginResponse.typeName = "edgebit.platform.v1alpha.PasswordLoginResponse";
PasswordLoginResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message edgebit.platform.v1alpha.APIAccessTokenLoginRequest
 */
class APIAccessTokenLoginRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string token = 1;
         */
        this.token = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new APIAccessTokenLoginRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new APIAccessTokenLoginRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new APIAccessTokenLoginRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(APIAccessTokenLoginRequest, a, b);
    }
}
exports.APIAccessTokenLoginRequest = APIAccessTokenLoginRequest;
APIAccessTokenLoginRequest.runtime = protobuf_1.proto3;
APIAccessTokenLoginRequest.typeName = "edgebit.platform.v1alpha.APIAccessTokenLoginRequest";
APIAccessTokenLoginRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * @generated from message edgebit.platform.v1alpha.APIAccessTokenLoginResponse
 */
class APIAccessTokenLoginResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string session_token = 1;
         */
        this.sessionToken = "";
        /**
         * @generated from field: string project_id = 2;
         */
        this.projectId = "";
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new APIAccessTokenLoginResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new APIAccessTokenLoginResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new APIAccessTokenLoginResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(APIAccessTokenLoginResponse, a, b);
    }
}
exports.APIAccessTokenLoginResponse = APIAccessTokenLoginResponse;
APIAccessTokenLoginResponse.runtime = protobuf_1.proto3;
APIAccessTokenLoginResponse.typeName = "edgebit.platform.v1alpha.APIAccessTokenLoginResponse";
APIAccessTokenLoginResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "session_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "project_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);