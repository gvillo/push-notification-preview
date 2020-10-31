"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppleRegularPushNotificationPreview = _interopRequireDefault(require("./AppleRegularPushNotificationPreview"));

var _AppleRichPushNotificationPreview = _interopRequireDefault(require("./AppleRichPushNotificationPreview"));

var _EmojiProcessor = require("./EmojiProcessor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ApplePushNotificationPreview(props) {
  var message = props.message,
      title = props.title,
      image = props.image,
      actionButtons = props.actionButtons;
  var emojiInTitle = (0, _EmojiProcessor.checkIfEmojiPresent)(title);
  var emojiInMessage = (0, _EmojiProcessor.checkIfEmojiPresent)(message);
  var richPush = emojiInTitle || emojiInMessage || image !== undefined || actionButtons !== undefined;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !richPush && /*#__PURE__*/_react["default"].createElement(_AppleRegularPushNotificationPreview["default"], props), richPush && /*#__PURE__*/_react["default"].createElement(_AppleRichPushNotificationPreview["default"], props));
}

ApplePushNotificationPreview.propTypes = {
  actionButtons: _propTypes["default"].arrayOf(_propTypes["default"].string),
  appName: _propTypes["default"].string,
  color: _propTypes["default"].string,
  image: _propTypes["default"].string,
  message: _propTypes["default"].string,
  time: _propTypes["default"].string,
  title: _propTypes["default"].string
};
var _default = ApplePushNotificationPreview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHBsZVB1c2hOb3RpZmljYXRpb25QcmV2aWV3LmpzIl0sIm5hbWVzIjpbIkFwcGxlUHVzaE5vdGlmaWNhdGlvblByZXZpZXciLCJwcm9wcyIsIm1lc3NhZ2UiLCJ0aXRsZSIsImltYWdlIiwiYWN0aW9uQnV0dG9ucyIsImVtb2ppSW5UaXRsZSIsImVtb2ppSW5NZXNzYWdlIiwicmljaFB1c2giLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwic3RyaW5nIiwiYXBwTmFtZSIsImNvbG9yIiwidGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBU0EsNEJBQVQsQ0FBc0NDLEtBQXRDLEVBQTZDO0FBQUEsTUFFbkNDLE9BRm1DLEdBRU1ELEtBRk4sQ0FFbkNDLE9BRm1DO0FBQUEsTUFFMUJDLEtBRjBCLEdBRU1GLEtBRk4sQ0FFMUJFLEtBRjBCO0FBQUEsTUFFbkJDLEtBRm1CLEdBRU1ILEtBRk4sQ0FFbkJHLEtBRm1CO0FBQUEsTUFFWkMsYUFGWSxHQUVNSixLQUZOLENBRVpJLGFBRlk7QUFHM0MsTUFBTUMsWUFBWSxHQUFHLHlDQUFvQkgsS0FBcEIsQ0FBckI7QUFDQSxNQUFNSSxjQUFjLEdBQUcseUNBQW9CTCxPQUFwQixDQUF2QjtBQUNBLE1BQU1NLFFBQVEsR0FDWkYsWUFBWSxJQUNaQyxjQURBLElBRUFILEtBQUssS0FBS0ssU0FGVixJQUdBSixhQUFhLEtBQUtJLFNBSnBCO0FBTUEsc0JBQ0UsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLFFBQ0csQ0FBQ0QsUUFBRCxpQkFBYSxnQ0FBQywrQ0FBRCxFQUF5Q1AsS0FBekMsQ0FEaEIsRUFFR08sUUFBUSxpQkFBSSxnQ0FBQyw0Q0FBRCxFQUFzQ1AsS0FBdEMsQ0FGZixDQURGO0FBTUQ7O0FBRURELDRCQUE0QixDQUFDVSxTQUE3QixHQUF5QztBQUN2Q0wsRUFBQUEsYUFBYSxFQUFFTSxzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCLENBRHdCO0FBRXZDQyxFQUFBQSxPQUFPLEVBQUVILHNCQUFVRSxNQUZvQjtBQUd2Q0UsRUFBQUEsS0FBSyxFQUFFSixzQkFBVUUsTUFIc0I7QUFJdkNULEVBQUFBLEtBQUssRUFBRU8sc0JBQVVFLE1BSnNCO0FBS3ZDWCxFQUFBQSxPQUFPLEVBQUVTLHNCQUFVRSxNQUxvQjtBQU12Q0csRUFBQUEsSUFBSSxFQUFFTCxzQkFBVUUsTUFOdUI7QUFPdkNWLEVBQUFBLEtBQUssRUFBRVEsc0JBQVVFO0FBUHNCLENBQXpDO2VBVWViLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEFwcGxlUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3IGZyb20gXCIuL0FwcGxlUmVndWxhclB1c2hOb3RpZmljYXRpb25QcmV2aWV3XCI7XG5pbXBvcnQgQXBwbGVSaWNoUHVzaE5vdGlmaWNhdGlvblByZXZpZXcgZnJvbSBcIi4vQXBwbGVSaWNoUHVzaE5vdGlmaWNhdGlvblByZXZpZXdcIjtcbmltcG9ydCB7IGNoZWNrSWZFbW9qaVByZXNlbnQgfSBmcm9tIFwiLi9FbW9qaVByb2Nlc3NvclwiO1xuXG5mdW5jdGlvbiBBcHBsZVB1c2hOb3RpZmljYXRpb25QcmV2aWV3KHByb3BzKSB7XG5cbiAgY29uc3QgeyBtZXNzYWdlLCB0aXRsZSwgaW1hZ2UsIGFjdGlvbkJ1dHRvbnMgfSA9IHByb3BzO1xuICBjb25zdCBlbW9qaUluVGl0bGUgPSBjaGVja0lmRW1vamlQcmVzZW50KHRpdGxlKTtcbiAgY29uc3QgZW1vamlJbk1lc3NhZ2UgPSBjaGVja0lmRW1vamlQcmVzZW50KG1lc3NhZ2UpO1xuICBjb25zdCByaWNoUHVzaCA9XG4gICAgZW1vamlJblRpdGxlIHx8XG4gICAgZW1vamlJbk1lc3NhZ2UgfHxcbiAgICBpbWFnZSAhPT0gdW5kZWZpbmVkIHx8XG4gICAgYWN0aW9uQnV0dG9ucyAhPT0gdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgeyFyaWNoUHVzaCAmJiA8QXBwbGVSZWd1bGFyUHVzaE5vdGlmaWNhdGlvblByZXZpZXcgey4uLnByb3BzfSAvPn1cbiAgICAgIHtyaWNoUHVzaCAmJiA8QXBwbGVSaWNoUHVzaE5vdGlmaWNhdGlvblByZXZpZXcgey4uLnByb3BzfSAvPn1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5BcHBsZVB1c2hOb3RpZmljYXRpb25QcmV2aWV3LnByb3BUeXBlcyA9IHtcbiAgYWN0aW9uQnV0dG9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGltZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGxlUHVzaE5vdGlmaWNhdGlvblByZXZpZXc7XG4iXX0=