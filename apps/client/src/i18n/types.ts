import { LOCALES } from './locales';

export type LocaleType = typeof LOCALES[keyof typeof LOCALES];

export interface ILocale {
	[key: string]: string;
}

export interface IMessages {
	[LOCALES.ENGLISH]: ILocale;
	[LOCALES.RUSSIAN]: ILocale;
}

export enum MESSAGES {
	LANGUAGE = 'LANGUAGE',
	ENGLISH = 'ENGLISH',
	RUSSIAN = 'RUSSIAN',
	SETTINGS = 'SETTINGS',
	DARK_THEME = 'DARK_THEME',
	MAIN_HEADER = 'MAIN_HEADER',
	DESCRIPTION = 'DESCRIPTION',
	KEYWORDS = 'KEYWORDS',
	APP_LOGO = 'APP_LOGO',
	FEED_LOGO = 'FEED_LOGO',
	LEAD = 'LEAD',
	RSS_INPUT = 'RSS_INPUT',
	SIGN_IN = 'SIGN_IN',
	SIGN_UP = 'SIGN_UP',
	SIGN_OUT = 'SIGN_OUT',
	NO_ACCOUNT = 'NO_ACCOUNT',
	USERNAME = 'USERNAME',
	PASSWORD = 'PASSWORD',
	PASSWORD_CONFIRMATION = 'PASSWORD_CONFIRMATION',
	REGISTRATION_SUCCESSFULLY_COMPLETED = 'REGISTRATION_SUCCESSFULLY_COMPLETED',
	BACK = 'BACK',
	ADD = 'ADD',
	SEARCH = 'SEARCH',
	SEARCH_BY_REQUEST = 'SEARCH_BY_REQUEST',
	VOICE_INPUT = 'VOICE_INPUT',
	FIND = 'FIND',
	NOT_FOUND = 'NOT_FOUND',
	RESET = 'RESET',
	DELETE = 'DELETE',
	LOADING = 'LOADING',
	POSTS = 'POSTS',
	PREVIEW = 'PREVIEW',
	READ = 'READ',
	READ_MORE = 'READ_MORE',
	UNREAD = 'UNREAD',
	ALL = 'ALL',
	MARK = 'MARK',
	MARK_ALL_AS_READ = 'MARK_ALL_AS_READ',
	MARK_ALL_READ_WARNING = 'MARK_ALL_READ_WARNING',
	SORTING_POSTS = 'SORTING_POSTS',
	NEW_FIRST = 'NEW_FIRST',
	OLD_FIRST = 'OLD_FIRST',
	CLOSE = 'CLOSE',
	FEEDS = 'FEEDS',
	NO_FEEDS = 'NO_FEEDS',
	FEEDS_AUTOUPDATE = 'FEEDS_AUTOUPDATE',
	AUTOUPDATE_DISABLED = 'AUTOUPDATE_DISABLED',
	FEEDS_TOOLTIP_SELECT = 'FEEDS_TOOLTIP_SELECT',
	FEEDS_DELETE_WARNING = 'FEEDS_DELETE_WARNING',
	RSS_SUCCESSFULLY_LOADED = 'RSS_SUCCESSFULLY_LOADED',
	INSPIRED_BY = 'INSPIRED_BY',
	HEXLET_COMPANY = 'HEXLET_COMPANY',
	SCROLL_TO_TOP = 'SCROLL_TO_TOP',
	OFFLINE_TOOLTIP = 'OFFLINE__TOOLTIP',
	ERROR_EMPTY = 'ERROR_EMPTY',
	ERROR_USERNAME_LENGTH = 'ERROR_USERNAME_LENGTH',
	ERROR_PASSWORD_LENGTH = 'ERROR_PASSWORD_LENGTH',
	ERROR_PASSWORD_NOT_MATCH = 'ERROR_PASSWORD_NOT_MATCH',
	ERROR_INCORRECT_USERNAME_PASSWORD = 'ERROR_INCORRECT_USERNAME_PASSWORD',
	ERROR_INVALID_URL = 'ERROR_INVALID_URL',
	ERROR_USER_ALREADY_EXIST = 'ERROR_USER_ALREADY_EXIST',
	ERROR_RSS_ALREADY_EXIST = 'ERROR_RSS_ALREADY_EXIST',
	ERROR_MAX_LIMIT_REACHED = 'ERROR_LIMIT_REACHED',
	ERROR_NETWORK = 'ERROR_NETWORK',
	ERROR_TIMEOUT = 'ERROR_TIMEOUT',
	ERROR_INCORRECT_RSS = 'ERROR_INCORRECT_RSS',
	ERROR_UNKNOWN = 'ERROR_UNKNOWN',
}
