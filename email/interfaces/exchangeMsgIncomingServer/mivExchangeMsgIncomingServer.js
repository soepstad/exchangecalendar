/* ***** BEGIN LICENSE BLOCK *****
 * Version: GPL 3.0
 *
 * The contents of this file are subject to the General Public License
 * 3.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.gnu.org/licenses/gpl.html
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * Author: Michel Verbraak (info@1st-setup.nl)
 * Website: http://www.1st-setup.nl/
 *
 * This interface/service is used for loadBalancing Request to Exchange
 *
 * ***** BEGIN LICENSE BLOCK *****/

var Cc = Components.classes;
var Ci = Components.interfaces;
var Cu = Components.utils;
var Cr = Components.results;
var components = Components;

Cu.import("resource://gre/modules/XPCOMUtils.jsm");
Cu.import("resource://gre/modules/Services.jsm");

try {
Cu.import("resource://exchangemailInterface/exchangeMsgFolder/mivExchangeMsgFolder.js");
}
catch(err){ dump("err1:"+err+"\n"); }


function mivExchangeMsgIncomingServer() {

	//this.logInfo("mivExchangeMsgIncomingServer: init");

	this._port = 443;

}

var mivExchangeMsgIncomingServerGUID = "79d87edc-020e-48d4-8c04-b894edab4bd2";

mivExchangeMsgIncomingServer.prototype = {

	QueryInterface : XPCOMUtils.generateQI([Ci.mivExchangeMsgIncomingServer,
				Ci.nsIMsgIncomingServer,
				Ci.nsIClassInfo,
				Ci.nsISupports]),

	_className : "mivExchangeMsgIncomingServer",

	classDescription : "Exchange EWS Msg Incoming server",

	classID : components.ID("{"+mivExchangeMsgIncomingServerGUID+"}"),
	contractID : "@mozilla.org/messenger/protocol/info;1?type=exchangeWebServiceMail",
	flags : Ci.nsIClassInfo.THREADSAFE,
	implementationLanguage : Ci.nsIProgrammingLanguage.JAVASCRIPT,

	// nsISupports getHelperForLanguage(in PRUint32 language);
	getHelperForLanguage: function _getHelperForLanguage(language) {
		return null;
	},

	getInterfaces : function _getInterfaces(count) 
	{
		var ifaces = [Ci.mivExchangeMsgIncomingServer,
				Ci.nsIMsgIncomingServer,
				Ci.nsIClassInfo,
				Ci.nsISupports];
		count.value = ifaces.length;
		return ifaces;
	},

  /**
   * internal pref key - guaranteed to be unique across all servers
   */
//  attribute ACString key;
	get key()
	{
		dump("mivExchangeMsgIncomingServer: get key\n");
		return this._key;
	},

	set key(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set key aValue:"+aValue+"\n");
		this._key = aValue;
	},

  /**
   * pretty name - should be "userid on hostname"
   * if the pref is not set
   */
//  attribute AString prettyName;
	get prettyName()
	{
		dump("mivExchangeMsgIncomingServer: get prettyName\n");
		if (!this._prettyName) {
			this._prettyName = "No prettyName";
		}
		return this._prettyName;
	},

	set prettyName(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set prettyName aValue:"+aValue+"\n");
		return this._prettyName;
	},

  /**
  * helper function to construct the pretty name in a server type
  * specific way - e.g., mail for foo@test.com, news on news.mozilla.org
  */
//  readonly attribute AString constructedPrettyName;
	get constructedPrettyName()
	{
		dump("mivExchangeMsgIncomingServer: get constructedPrettyName\n");
		if (!this._constructedPrettyName) {
			this._constructedPrettyName = "No constructedPrettyName";
		}
		return this._constructedPrettyName;
	},

  /**
   * hostname of the server
   */
//  attribute ACString hostName;
	get hostName()
	{
		dump("mivExchangeMsgIncomingServer: get hostName\n");
		return this._hostname;
	},

	set hostName(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set hostName aValue:"+aValue+"\n");
		this._hostname = aValue;
	},
  
  /**
   * real hostname of the server (if server name is changed it's stored here)
   */
//  attribute ACString realHostName;
	get realHostName()
	{
		dump("get realHostName\n");
		if (!this._realHostName) {
			this._realHostName = "No realHostName";
		}
		return this._realHostName;
	},

	set realHostName(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set realHostName aValue:"+aValue+"\n");
		this._realHostName = aValue;
	},
  
  /* port of the server */
//  attribute long port;
	get port()
	{
		dump("mivExchangeMsgIncomingServer: get port\n");
		return this._port;
	},

	set port(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set port aValue:"+aValue+"\n");
		this._port = aValue;
	},

  /**
   * userid to log into the server
   */
//  attribute ACString username;
	get username()
	{
		dump("mivExchangeMsgIncomingServer: get username\n");
		return this._username;
	},

	set username(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set username aValue:"+aValue+"\n");
		this._username = aValue;
	},

  /**
   * real username of the server (if username is changed it's stored here)
   */
//  attribute ACString realUsername;
	get realUsername()
	{
		dump("mivExchangeMsgIncomingServer: get realUsername\n");
		if (!this._realUsername) {
			this._realUsername = "No realUsername";
		}
		return this._realUsername;
	},

	set realUsername(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set realUsername aValue:"+aValue+"\n");
		this._realUsername = aValue;
	},

  /**
   * protocol type, i.e. "pop3", "imap", "nntp", "none", etc
   * used to construct URLs
   */
//  attribute ACString type;
	get type()
	{
		dump("mivExchangeMsgIncomingServer: get type\n");
		if (!this._type) {
			this._type = "exchangeWebServiceMail";
		}
		return this._type;
	},

	set type(aValue)
	{
		dump("set type aValue:"+aValue+"\n");
		this._type = aValue;
	},

//  readonly attribute AString accountManagerChrome;
	get accountManagerChrome()
	{
		dump("mivExchangeMsgIncomingServer: get accountManagerChrome\n");
		return "chrome://exchangemail/am-main.xul");
	},

  /**
   * the schema for the local mail store, such
   * as "mailbox", "imap", or "news"
   * used to construct URIs
   */
//  readonly attribute ACString localStoreType;
	get localStoreType()
	{
		dump("mivExchangeMsgIncomingServer: get localStoreType\n");
		return "exchangeWebServiceMail");
	},

  // Perform specific tasks (reset flags, remove files, etc) for account user/server name changes.
//  void onUserOrHostNameChanged(in ACString oldName, in ACString newName,
//                               in bool hostnameChanged);
	onUserOrHostNameChanged: function _onUserOrHostNameChanged(oldName, newName, hostnameChanged)
	{
		dump("mivExchangeMsgIncomingServer: function onUserOrHostNameChanged\n");
	},

  /* cleartext version of the password */
//  attribute ACString password;
	get password()
	{
		dump("mivExchangeMsgIncomingServer: get password\n");
		if (!this._password) {
			this._password = "password";
		}
		return this._password;
	},

	set password(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set password aValue:"+aValue+"\n");
		this._password = aValue;
	},

  /**
   * Attempts to get the password first from the password manager, if that
   * fails it will attempt to get it from the user if aMsgWindow is supplied.
   *
   * @param aPromptString  The text of the prompt if the user is prompted for
   *                       password.
   * @param aPromptTitle   The title of the prompt if the user is prompted.
   * @param aMsgWindow     A message window to associate the prompt with.
   * @return               The obtained password. Could be an empty password.
   *
   * @exception NS_ERROR_FAILURE  The password could not be obtained.
   *
   * @note NS_MSG_PASSWORD_PROMPT_CANCELLED is a success code that is returned
   *       if the prompt was presented to the user but the user cancelled the
   *       prompt.
   */
//  ACString getPasswordWithUI(in AString aPromptString, in AString aPromptTitle,
//                             in nsIMsgWindow aMsgWindow);
	getPasswordWithUI: function _getPasswordWithUI(aPromptString, aPromptTitle, aMsgWindow)
	{
		dump("mivExchangeMsgIncomingServer: function getPasswordWithUI\n");
	},

  /* forget the password in memory and in single signon database */
//  void forgetPassword();
	forgetPassword: function _forgetPassword()
	{
		dump("mivExchangeMsgIncomingServer: function forgetPassword\n");
		this._password = undefined;
	},

  /* forget the password in memory which is cached for the session */
//  void forgetSessionPassword();
	forgetSessionPassword: function _forgetSessionPassword()
	{
		dump("mivExchangeMsgIncomingServer: function forgetSessionPassword\n");
		this._password = undefined;
	},

  /* should we download whole messages when biff goes off? */
//  attribute boolean downloadOnBiff;
	get downloadOnBiff()
	{
		dump("mivExchangeMsgIncomingServer: get downloadOnBiff\n");
		if (!this._downloadOnBiff) {
			this._downloadOnBiff = false;
		}
		return this._downloadOnBiff;
	},

	set downloadOnBiff(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set downloadOnBiff aValue:"+aValue+"\n");
		this._downloadOnBiff = aValue;
	},

  /* should we biff the server? */
//  attribute boolean doBiff;
	get doBiff()
	{
		dump("mivExchangeMsgIncomingServer: get doBiff\n");
		if (!this._doBiff) {
			this._doBiff = false;
		}
		return this._doBiff;
	},

	set doBiff(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set doBiff aValue:"+aValue+"\n");
		this._doBiff = aValue;
	},

  /* how often to biff */
//  attribute long biffMinutes;
	get biffMinutes()
	{
		dump("mivExchangeMsgIncomingServer: get biffMinutes\n");
		if (!this._biffMinutes) {
			this._biffMinutes = 0;
		}
		return this._biffMinutes;
	},

	set biffMinutes(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set biffMinutes aValue:"+aValue+"\n");
		this._biffMinutes = aValue;
	},

  /* current biff state */
//  attribute unsigned long biffState;
	get biffState()
	{
		dump("mivExchangeMsgIncomingServer: get biffState\n");
		if (!this._biffState) {
			this._biffState = 0;
		}
		return this._biffState;
	},

	set biffState(aValue)
	{
		dump("set biffState aValue:"+aValue+"\n");
		this._biffState = aValue;
	},

  /* are we running a url as a result of biff going off? (different from user clicking get msg) */
//  attribute boolean performingBiff; 
	get performingBiff()
	{
		dump("mivExchangeMsgIncomingServer: get performingBiff\n");
		if (!this._performingBiff) {
			this._performingBiff = false;
		}
		return this._performingBiff;
	},

	set performingBiff(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set performingBiff aValue:"+aValue+"\n");
		this._performingBiff = aValue;
	},

  /* the on-disk path to message storage for this server */
//  attribute nsIFile localPath;
	get localPath()
	{
		dump("mivExchangeMsgIncomingServer: get localPath\n");
		return this._localPath;
	},

	set localPath(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set localPath aValue:"+aValue+"\n");
		this._localPath = aValue;
	},

  /// message store to use for the folders under this server.
//  readonly attribute nsIMsgPluggableStore msgStore;
	get msgStore()
	{
		dump("mivExchangeMsgIncomingServer: get msgStore\n");
		return null;
	},

  /* the RDF URI for the root mail folder */
//  readonly attribute ACString serverURI;
	get serverURI()
	{
		dump("mivExchangeMsgIncomingServer: get serverURI\n");
		return "exchangeWebServiceMail://Inbox");
	},

  /* the root folder for this server, even if server is deferred */
//  attribute nsIMsgFolder rootFolder;
	get rootFolder()
	{
		dump("mivExchangeMsgIncomingServer: get rootFolder\n");
		if (!this._rootFolder) {
			this._rootFolder = new mivExchangeMsgFolder();
		}
		return this._rootFolder;
	},

	set rootFolder(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set rootFolder aValue:"+aValue+"\n");
		if (this._rootFolder) {
			dump("mivExchangeMsgIncomingServer: set rootFolder: We all ready a a rootFolder.\n");
		}

		this._rootFolder = aValue;
	},

  /* root folder for this account 
     - if account is deferred, root folder of deferred-to account */
//  readonly attribute nsIMsgFolder rootMsgFolder;
	get rootMsgFolder()
	{
		dump("mivExchangeMsgIncomingServer: get rootMsgFolder\n");
		if (!this._rootFolder) {
			this._rootFolder = new mivExchangeMsgFolder();
		}
		return this._rootFolder;
	},

  /* are we already getting new Messages on the current server..
     This is used to help us prevent multiple get new msg commands from
     going off at the same time. */
//  attribute boolean serverBusy;
	get serverBusy()
	{
		dump("mivExchangeMsgIncomingServer: get serverBusy\n");
		if (!this._serverBusy) {
			this._serverBusy = false;
		}
		return this._serverBusy;
	},

	set serverBusy(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set serverBusy aValue:"+aValue+"\n");
		this._serverBusy = aValue;
	},

  /**
   * Is the server using a secure channel (SSL or STARTTLS).
   */
//  readonly attribute boolean isSecure;
	get isSecure()
	{
		dump("mivExchangeMsgIncomingServer: get isSecure\n");
		return this._isSecure;
	},

  /**
   * Authentication mechanism.
   *
   * @see nsMsgAuthMethod (in MailNewsTypes2.idl)
   * Same as "mail.server...authMethod" pref
   */
//  attribute nsMsgAuthMethodValue authMethod;
	get authMethod()
	{
		dump("mivExchangeMsgIncomingServer: get authMethod\n");
		if (!this._authMethod) {
			this._authMethod = Ci.nsMsgAuthMethod.none;
		}
		return this._authMethod;
	},

	set authMethod(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set authMethod aValue:"+aValue+"\n");
		this._authMethod = aValue;
	},

  /**
   * Whether to SSL or STARTTLS or not
   *
   * @see nsMsgSocketType (in MailNewsTypes2.idl)
   * Same as "mail.server...socketType" pref
   */
//  attribute nsMsgSocketTypeValue socketType;
	get socketType()
	{
		dump("mivExchangeMsgIncomingServer: get socketType\n");
		if (!this._socketType) {
			this._socketType = Ci.nsMsgSocketType.SSL;
		}
		return this._socketType;
	},

	set socketType(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set socketType aValue:"+aValue+"\n");
		this._socketType = aValue;
	},

  /* empty trash on exit */
//  attribute boolean emptyTrashOnExit;
	get emptyTrashOnExit()
	{
		dump("mivExchangeMsgIncomingServer: get emptyTrashOnExit\n");
		if (!this._emptyTrashOnExit) {
			this._emptyTrashOnExit = false;
		}
		return this._emptyTrashOnExit;
	},

	set emptyTrashOnExit(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set emptyTrashOnExit aValue:"+aValue+"\n");
		this._emptyTrashOnExit = aValue;
	},

  /**
   * Get the server's list of filters.
   *
   * This SHOULD be the same filter list as the root folder's, if the server
   * supports per-folder filters. Furthermore, this list SHOULD be used for all
   * incoming messages.
   *
   * Since the returned nsIMsgFilterList is mutable, it is not necessary to call
   * setFilterList after the filters have been changed.
   *
   * @param aMsgWindow  @ref msgwindow "The standard message window"
   * @return            The list of filters.
   */
//  nsIMsgFilterList getFilterList(in nsIMsgWindow aMsgWindow);
	getFilterList: function _getFilterList(aMsgWindow)
	{
		dump("mivExchangeMsgIncomingServer: function getFilterList\n");
		return this._filterList;
	},

  /**
   * Set the server's list of filters.
   *
   * Note that this does not persist the filter list. To change the contents
   * of the existing filters, use getFilterList and mutate the values as
   * appopriate.
   *
   * @param aFilterList The new list of filters.
   */
//  void setFilterList(in nsIMsgFilterList aFilterList);
	setFilterList: function _setFilterList(aFilterList)
	{
		dump("mivExchangeMsgIncomingServer: function setFilterList\n");
		this._filterList = aFilterList;
	},

  /**
   * Get user editable filter list. This does not have to be the same as
   * the filterlist above, typically depending on the users preferences.
   * The filters in this list are not processed, but only to be edited by
   * the user.
   * @see getFilterList
   *
   * @param aMsgWindow  @ref msgwindow "The standard message window"
   * @return            The list of filters.
   */
//  nsIMsgFilterList getEditableFilterList(in nsIMsgWindow aMsgWindow);
	getEditableFilterList: function _getEditableFilterList(aMsgWindow)
	{
		dump("mivExchangeMsgIncomingServer: function getEditableFilterList\n");
		return this._editableFilterList;
	},

  /**
   * Set user editable filter list.
   * This does not persist the filterlist, @see setFilterList
   * @see getEditableFilterList
   * @see setFilterList
   *
   * @param aFilterList The new list of filters.
   */
//  void setEditableFilterList(in nsIMsgFilterList aFilterList);
	setEditableFilterList: function _setEditableFilterList(aFilterList)
	{
		dump("mivExchangeMsgIncomingServer: function setEditableFilterList\n");
		this._editableFilterList = aFilterList;
	},

  /* we use this to set the default local path.  we use this when migrating prefs */
//  void setDefaultLocalPath(in nsIFile aDefaultLocalPath);
	setDefaultLocalPath: function _setDefaultLocalPath(aDefaultLocalPath)
	{
		dump("mivExchangeMsgIncomingServer: function setDefaultLocalPath\n");
		this._defaultLocalPath = aDefaultLocalPath;
	},

  /**
   * Verify that we can logon
   * 
   * @param  aUrlListener - gets called back with success or failure.
   * @param aMsgWindow         nsIMsgWindow to use for notification callbacks.
   * @return - the url that we run.
   */
//  nsIURI verifyLogon(in nsIUrlListener aUrlListener, in nsIMsgWindow aMsgWindow);
	verifyLogon: function _verifyLogon(aUrlListener, aMsgWindow)
	{
		dump("mivExchangeMsgIncomingServer: function verifyLogon\n");
	},

  /* do a biff */
//  void performBiff(in nsIMsgWindow aMsgWindow);
	performBiff: function _performBiff(aMsgWindow)
	{
		dump("mivExchangeMsgIncomingServer: function performBiff\n");
	},
  
  /* get new messages */
//  void getNewMessages(in nsIMsgFolder aFolder, in nsIMsgWindow aMsgWindow, 
//                      in nsIUrlListener aUrlListener);
	getNewMessages: function _getNewMessages(aFolder, aMsgWindow, aUrlListener)
	{
		dump("mivExchangeMsgIncomingServer: function getNewMessages\n");
	},

  /* this checks if a server needs a password to do biff */
//  readonly attribute boolean serverRequiresPasswordForBiff;
	get serverRequiresPasswordForBiff()
	{
		dump("mivExchangeMsgIncomingServer: get serverRequiresPasswordForBiff\n");
		if (!this._serverRequiresPasswordForBiff) {
			this._serverRequiresPasswordForBiff = true;
		}
		return this._serverRequiresPasswordForBiff;
	},

  /* this gets called when the server is expanded in the folder pane */
//  void performExpand(in nsIMsgWindow aMsgWindow);
	performExpand: function _performExpand(aMsgWindow)
	{
		dump("mivExchangeMsgIncomingServer: function performExpand\n");
	},

  /* Write out all known folder data to panacea.dat */
//  void writeToFolderCache(in nsIMsgFolderCache folderCache);
	writeToFolderCache: function _writeToFolderCache(folderCache)
	{
		dump("mivExchangeMsgIncomingServer: function writeToFolderCache\n");
	},

  /* close any server connections */
//  void closeCachedConnections();
	closeCachedConnections: function _closeCachedConnections()
	{
		dump("mivExchangeMsgIncomingServer: function closeCachedConnections\n");
	},
 
  /* ... */
//  void shutdown();
	shutdown: function _shutdown()
	{
		dump("mivExchangeMsgIncomingServer: function shutdown\n");
	},

  /**
   * Get or set the value as determined by the preference tree.
   *
   * These methods MUST NOT fail if the preference is not set, and therefore
   * they MUST have a default value. This default value is provided in practice
   * by use of a default preference tree. The standard format for the pref
   * branches are <tt>mail.server.<i>key</i>.</tt> for per-server preferences,
   * such that the preference is <tt>mail.server.<i>key</i>.<i>attr</i></tt>.
   *
   * The attributes are passed in as strings for ease of access by the C++
   * consumers of this method.
   *
   * @param attr  The value for which the preference should be accessed.
   * @param value The value of the preference to set.
   * @return      The value of the preference.
   * @{
   */
//  boolean getBoolValue(in string attr);
	getBoolValue: function _getBoolValue(attr)
	{
		dump("mivExchangeMsgIncomingServer: function getBoolValue\n");
		return this._boolValues[attr];
	},

//  void setBoolValue(in string attr, in boolean value);
	setBoolValue: function _setBoolValue(attr, value)
	{
		dump("mivExchangeMsgIncomingServer: function setBoolValue\n");
		if (!this._boolValues) {
			this._boolValues = {};
		}
		this._boolValues[attr] = value;
	},

//  ACString getCharValue(in string attr);
	getCharValue: function _getCharValue(attr)
	{
		dump("mivExchangeMsgIncomingServer: function getCharValue: attr:"+attr+"\n");

		return this._charValues[attr];
	},

//  void setCharValue(in string attr, in ACString value);
	setCharValue: function _setCharValue(attr, value)
	{
		dump("mivExchangeMsgIncomingServer: function setCharValue\n");
		if (!this._charValues) {
			this._charValues = {};
		}
		this._charValues[attr] = value;
	},

//  AString getUnicharValue(in string attr);
	getUnicharValue: function _getUnicharValue(attr)
	{
		dump("mivExchangeMsgIncomingServer: function getUnicharValue\n");
		return this._unicharValues[attr];
	},

//  void setUnicharValue(in string attr, in AString value);
	setUnicharValue: function _setUnicharValue(attr, value)
	{
		dump("mivExchangeMsgIncomingServer: function setUnicharValue\n");
		if (!this._unicharValues) {
			this._unicharValues = {};
		}
		this._unicharValues[attr] = value;
	},
  
//  long getIntValue(in string attr);
	getIntValue: function _getIntValue(attr)
	{
		dump("mivExchangeMsgIncomingServer: function getIntValue\n");
		return this._IntValues[attr];
	},

//  void setIntValue(in string attr, in long value);
	setIntValue: function _setIntValue(attr, value)
	{
		dump("mivExchangeMsgIncomingServer: function setIntValue\n");
		if (!this._IntValues) {
			this._IntValues = {};
		}
		this._IntValues[attr] = value;
	},

  /** @} */

  /**
   * Get or set the value as determined by the preference tree.
   *
   * These methods MUST NOT fail if the preference is not set, and therefore
   * they MUST have a default value. This default value is provided in practice
   * by use of a default preference tree. The standard format for the pref
   * branches are <tt>mail.server.<i>key</i>.</tt> for per-server preferences,
   * such that the preference is <tt>mail.server.<i>key</i>.<i>attr</i></tt>.
   *
   * The attributes are passed in as strings for ease of access by the C++
   * consumers of this method.
   *
   * There are two preference names on here for legacy reasons, where the first
   * is the name which will be using a (preferred) relative preference and the
   * second a deprecated absolute preference. Implementations that do not have
   * to worry about supporting legacy preferences can safely ignore this second
   * parameter. Callers must still provide a valid value, though.
   *
   * @param relpref The name of the relative file preference.
   * @param absref  The name of the absolute file preference.
   * @param aValue  The value of the preference to set.
   * @return        The value of the preference.
   * @{
   */
//  nsIFile getFileValue(in string relpref, in string abspref);
	getFileValue: function _getFileValue(relpref, abspref)
	{
		dump("mivExchangeMsgIncomingServer: function getFileValue\n");
	},

//  void setFileValue(in string relpref, in string abspref, in nsIFile aValue);
	setFileValue: function _setFileValue(relpref, abspref, aValue)
	{
		dump("mivExchangeMsgIncomingServer: function setFileValue\n");
	},

  /** @} */

  /**
   * this is really dangerous. this destroys all pref values
   * do not call this unless you know what you're doing!
   */
//  void clearAllValues();
	clearAllValues: function _clearAllValues()
	{
		dump("mivExchangeMsgIncomingServer: function clearAllValues\n");
	},

  /** 
   * this is also very dangerous.  this will remove the files
   * associated with this server on disk.
   */
//  void removeFiles();
	removeFiles: function _removeFiles()
	{
		dump("mivExchangeMsgIncomingServer: function removeFiles\n");
	},
  
//  attribute boolean valid;
	get valid()
	{
		dump("mivExchangeMsgIncomingServer: get valid\n");
		if (!this._valid) {
			this._valid = true;
		}
		return this._valid;
	},

	set valid(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set valid aValue:"+aValue+"\n");
		this._valid = aValue;
	},
  
//  AString toString();
	toString: function _toString()
	{
		dump("mivExchangeMsgIncomingServer: function toString\n");
		return "hihi";
	},

//  void displayOfflineMsg(in nsIMsgWindow aWindow);
	displayOfflineMsg: function _displayOfflineMsg(aWindow)
	{
		dump("mivExchangeMsgIncomingServer: function displayOfflineMsg\n");
	},

  /* used for comparing nsIMsgIncomingServers */
//  boolean equals(in nsIMsgIncomingServer server);
	equals: function _equals(server)
	{
		dump("mivExchangeMsgIncomingServer: function equals\n");
	},

  /* Get Messages at startup */
//  readonly attribute boolean downloadMessagesAtStartup; 
	get downloadMessagesAtStartup()
	{
		dump("mivExchangeMsgIncomingServer: get downloadMessagesAtStartup\n");
		if (!this._downloadMessagesAtStartup) {
			this._downloadMessagesAtStartup = true;
		}
		return this._downloadMessagesAtStartup;
	},

  /* check to this if the server supports filters */
//  attribute boolean canHaveFilters;
	get canHaveFilters()
	{
		dump("mivExchangeMsgIncomingServer: get canHaveFilters\n");
		if (!this._canHaveFilters) {
			this._canHaveFilters = false;
		}
		return this._canHaveFilters;
	},

	set canHaveFilters(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set canHaveFilters aValue:"+aValue+"\n");
		this._canHaveFilters = aValue;
	},

  /**
   * can this server be removed from the account manager?  for
   * instance, local mail is not removable, but an imported folder is 
   */
//  attribute boolean canDelete;
	get canDelete()
	{
		dump("mivExchangeMsgIncomingServer: get canDelete\n");
		if (!this._canDelete) {
			this._canDelete = false;
		}
		return this._canDelete;
	},

	set canDelete(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set canDelete aValue:"+aValue+"\n");
		this._canDelete = aValue;
	},

//  attribute boolean loginAtStartUp;
	get loginAtStartUp()
	{
		dump("mivExchangeMsgIncomingServer: get loginAtStartUp\n");
		if (!this._loginAtStartUp) {
			this._loginAtStartUp = false;
		}
		return this._loginAtStartUp;
	},

	set loginAtStartUp(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set loginAtStartUp aValue:"+aValue+"\n");
		this._loginAtStartUp = aValue;
	},

//  attribute boolean limitOfflineMessageSize;
	get limitOfflineMessageSize()
	{
		dump("mivExchangeMsgIncomingServer: get limitOfflineMessageSize\n");
		if (!this._limitOfflineMessageSize) {
			this._limitOfflineMessageSize = true;
		}
		return this._limitOfflineMessageSize;
	},

	set limitOfflineMessageSize(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set limitOfflineMessageSize aValue:"+aValue+"\n");
		this._limitOfflineMessageSize = aValue;
	},
//  attribute long maxMessageSize;
	get maxMessageSize()
	{
		dump("mivExchangeMsgIncomingServer: get maxMessageSize\n");
		if (!this._maxMessageSize) {
			this._maxMessageSize = 1024000000;
		}
		return this._maxMessageSize;
	},

	set maxMessageSize(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set maxMessageSize aValue:"+aValue+"\n");
		this._maxMessageSize = aValue;
	},

//  attribute nsIMsgRetentionSettings retentionSettings;
	get retentionSettings()
	{
		dump("mivExchangeMsgIncomingServer: get retentionSettings\n");
		if (!this._retentionSettings) {
			this._retentionSettings = null;
		}
		return this._retentionSettings;
	},

	set retentionSettings(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set retentionSettings aValue:"+aValue+"\n");
		this._retentionSettings = aValue;
	},

  /* check if this server can be a default server */
//  readonly attribute boolean canBeDefaultServer;
	get canBeDefaultServer()
	{
		dump("mivExchangeMsgIncomingServer: get canBeDefaultServer\n");
		if (!this._canBeDefaultServer) {
			this._canBeDefaultServer = true;
		}
		return this._canBeDefaultServer;
	},

  /* check if this server allows search operations */
//  readonly attribute boolean canSearchMessages;
	get canSearchMessages()
	{
		dump("mivExchangeMsgIncomingServer: get canSearchMessages\n");
		if (!this._canSearchMessages) {
			this._canSearchMessages = false;
		}
		return this._canSearchMessages;
	},

  /* check if this server allows canEmptyTrashOnExit operations */
//  readonly attribute boolean canEmptyTrashOnExit;
	get canEmptyTrashOnExit()
	{
		dump("mivExchangeMsgIncomingServer: get canEmptyTrashOnExit\n");
		if (!this._canEmptyTrashOnExit) {
			this._canEmptyTrashOnExit = false;
		}
		return this._canEmptyTrashOnExit;
	},

  /* display startup page once per account per session */
//  attribute boolean displayStartupPage;
	get displayStartupPage()
	{
		dump("mivExchangeMsgIncomingServer: get displayStartupPage\n");
		if (!this._displayStartupPage) {
			this._displayStartupPage = false;
		}
		return this._displayStartupPage;
	},

	set displayStartupPage(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set displayStartupPage aValue:"+aValue+"\n");
		this._displayStartupPage = aValue;
	},
//  attribute nsIMsgDownloadSettings downloadSettings;
	get downloadSettings()
	{
		dump("mivExchangeMsgIncomingServer: get downloadSettings\n");
		if (!this._downloadSettings) {
			this._downloadSettings = null;
		}
		return this._downloadSettings;
	},

	set downloadSettings(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set downloadSettings aValue:"+aValue+"\n");
		this._downloadSettings = aValue;
	},

  /*
   * Offline support level. Support level can vary based on abilities 
   * and features each server can offer wrt to offline service.
   * Here is the legend to determine the each support level details
   *
   * supportLevel == 0  --> no offline support (default) 
   * supportLevel == 10 --> regular offline feature support
   * supportLevel == 20 --> extended offline feature support 
   *
   * Each server can initialize itself to the support level if needed
   * to override the default choice i.e., no offline support.
   *
   * POP3, None and Movemail will default to 0. 
   * IMAP level 10 and NEWS with level 20. 
   * 
   */
//  attribute long offlineSupportLevel;
	get offlineSupportLevel()
	{
		dump("mivExchangeMsgIncomingServer: get offlineSupportLevel\n");
		if (!this._offlineSupportLevel) {
			this._offlineSupportLevel = 0;
		}
		return this._offlineSupportLevel;
	},

	set offlineSupportLevel(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set offlineSupportLevel aValue:"+aValue+"\n");
		this._offlineSupportLevel = aValue;
	},

  /* create pretty name for migrated accounts */
//  AString generatePrettyNameForMigration(); 
	generatePrettyNameForMigration: function _generatePrettyNameForMigration()
	{
		dump("mivExchangeMsgIncomingServer: function generatePrettyNameForMigration\n");
		if (!this._generatePrettyNameForMigration) {
			this._generatePrettyNameForMigration = "generatePrettyName";
		}
		return this._generatePrettyNameForMigration;
	},

  /* does this server have disk space settings? */
//  readonly attribute boolean supportsDiskSpace;
	get supportsDiskSpace()
	{
		dump("mivExchangeMsgIncomingServer: get supportsDiskSpace\n");
		if (!this._supportsDiskSpace) {
			this._supportsDiskSpace = false;
		}
		return this._supportsDiskSpace;
	},

  /**
   * Hide this server/account from the UI - used for smart mailboxes.
   * The server can be retrieved from the account manager by name using the
   * various Find methods, but nsIMsgAccountManager's GetAccounts and 
   * GetAllServers methods won't return the server/account.
   */
//  attribute boolean hidden;
	get hidden()
	{
		dump("mivExchangeMsgIncomingServer: get hidden\n");
		if (!this._hidden) {
			this._hidden = false;
		}
		return this._hidden;
	},

	set hidden(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set hidden aValue:"+aValue+"\n");
		this._hidden = aValue;
	},

  /**
   * If the server supports Fcc/Sent/etc, default prefs can point to 
   * the server. Otherwise, copies and folders prefs should point to
   * Local Folders.
   *
   * By default this value is set to true via global pref 'allows_specialfolders_usage'
   * (mailnews.js). For Nntp, the value is overridden to be false.
   * If ISPs want to modify this value, they should do that in their rdf file
   * by using this attribute. Please look at mozilla/mailnews/base/ispdata/aol.rdf for
   * usage example.
   */
//  attribute boolean defaultCopiesAndFoldersPrefsToServer;
	get defaultCopiesAndFoldersPrefsToServer()
	{
		dump("mivExchangeMsgIncomingServer: get defaultCopiesAndFoldersPrefsToServer\n");
		if (!this._defaultCopiesAndFoldersPrefsToServer) {
			this._defaultCopiesAndFoldersPrefsToServer = true;
		}
		return this._defaultCopiesAndFoldersPrefsToServer;
	},

	set defaultCopiesAndFoldersPrefsToServer(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set defaultCopiesAndFoldersPrefsToServer aValue:"+aValue+"\n");
		this._defaultCopiesAndFoldersPrefsToServer = aValue;
	},

  /* can this server allows sub folder creation */
//  attribute boolean canCreateFoldersOnServer;
	get canCreateFoldersOnServer()
	{
		dump("mivExchangeMsgIncomingServer: get canCreateFoldersOnServer\n");
		if (!this._canCreateFoldersOnServer) {
			this._canCreateFoldersOnServer = true;
		}
		return this._canCreateFoldersOnServer;
	},

	set canCreateFoldersOnServer(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set canCreateFoldersOnServer aValue:"+aValue+"\n");
		this._canCreateFoldersOnServer = aValue;
	},

  /* can this server allows message filing ? */
//  attribute boolean canFileMessagesOnServer;
	get canFileMessagesOnServer()
	{
		dump("mivExchangeMsgIncomingServer: get canFileMessagesOnServer\n");
		if (!this._canFileMessagesOnServer) {
			this._canFileMessagesOnServer = true;
		}
		return this._canFileMessagesOnServer;
	},

	set canFileMessagesOnServer(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set canFileMessagesOnServer aValue:"+aValue+"\n");
		this._canFileMessagesOnServer = aValue;
	},

  /* can this server allow compacting folders ? */
//  readonly attribute boolean canCompactFoldersOnServer;
	get canCompactFoldersOnServer()
	{
		dump("mivExchangeMsgIncomingServer: get canCompactFoldersOnServer\n");
		if (!this._canCompactFoldersOnServer) {
			this._canCompactFoldersOnServer = false;
		}
		return this._canCompactFoldersOnServer;
	},

  /* can this server allow undo delete ? */
//  readonly attribute boolean canUndoDeleteOnServer;
	get canUndoDeleteOnServer()
	{
		dump("mivExchangeMsgIncomingServer: get canUndoDeleteOnServer\n");
		if (!this._canUndoDeleteOnServer) {
			this._canUndoDeleteOnServer = true;
		}
		return this._canUndoDeleteOnServer;
	},

  /* used for setting up the filter UI */
//  readonly attribute nsMsgSearchScopeValue filterScope;
	get filterScope()
	{
		dump("mivExchangeMsgIncomingServer: get filterScope\n");
	},

  /* used for setting up the search UI */
//  readonly attribute nsMsgSearchScopeValue searchScope;
	get searchScope()
	{
		dump("mivExchangeMsgIncomingServer: get searchScope\n");
	},

  /** 
   * If the password for the server is available either via authentication 
   * in the current session or from password manager stored entries, return
   * false. Otherwise, return true. If password is obtained from password 
   * manager, set the password member variable.
   */ 
//  readonly attribute boolean passwordPromptRequired;
	get passwordPromptRequired()
	{
		dump("mivExchangeMsgIncomingServer: get passwordPromptRequired\n");
	},

  /**
   * for mail, this configures both the MDN filter, and the server-side
   * spam filter filters, if needed.
   *
   * If we have set up to filter return receipts into
   * our Sent folder, this utility method creates
   * a filter to do that, and adds it to our filterList
   * if it doesn't exist.  If it does, it will enable it.
   *
   * this is not used by news filters (yet).
   */
//  void configureTemporaryFilters(in nsIMsgFilterList filterList);
	configureTemporaryFilters: function _configureTemporaryFilters(filterList)
	{
		dump("mivExchangeMsgIncomingServer: function configureTemporaryFilters\n");
	},

  /**
   * If Sent folder pref is changed we need to clear the temporary 
   * return receipt filter so that the new return receipt filter can
   * be recreated (by ConfigureTemporaryReturnReceiptsFilter()).
   */
//  void clearTemporaryReturnReceiptsFilter();
	clearTemporaryReturnReceiptsFilter: function _clearTemporaryReturnReceiptsFilter()
	{
		dump("mivExchangeMsgIncomingServer: function clearTemporaryReturnReceiptsFilter\n");
	},

  /**
   * spam settings
   */
//  readonly attribute nsISpamSettings spamSettings;
	get spamSettings()
	{
		dump("mivExchangeMsgIncomingServer: get spamSettings\n");
	},

//  readonly attribute nsIMsgFilterPlugin spamFilterPlugin;
	get spamFilterPlugin()
	{
		dump("mivExchangeMsgIncomingServer: get spamFilterPlugin\n");
	},

//  nsIMsgFolder getMsgFolderFromURI(in nsIMsgFolder aFolderResource, in ACString aURI);
	getMsgFolderFromURI: function _getMsgFolderFromURI(aFolderResource, aURI)
	{
		dump("mivExchangeMsgIncomingServer: function getMsgFolderFromURI\n");
	},

//  readonly attribute boolean isDeferredTo;
	get isDeferredTo()
	{
		dump("mivExchangeMsgIncomingServer: get isDeferredTo\n");
	},

//  const long keepDups = 0;
//  const long deleteDups = 1;
//  const long moveDupsToTrash = 2;
//  const long markDupsRead = 3;

//  attribute long incomingDuplicateAction;
	get incomingDuplicateAction()
	{
		dump("mivExchangeMsgIncomingServer: get incomingDuplicateAction\n");
	},

	set incomingDuplicateAction(aValue)
	{
		dump("mivExchangeMsgIncomingServer: set incomingDuplicateAction aValue:"+aValue+"\n");
	},

  // check if new hdr is a duplicate of a recently arrived header
//  boolean isNewHdrDuplicate(in nsIMsgDBHdr aNewHdr);
	isNewHdrDuplicate: function _isNewHdrDuplicate(aNewHdr)
	{
		dump("mivExchangeMsgIncomingServer: function isNewHdrDuplicate\n");
	},

  /**
   * Set a boolean to force an inherited propertyName to return empty instead
   * of inheriting from a parent folder, server, or the global
   *
   * @param propertyName         The name of the property
   * @param aForcePropertyEmpty  true if an empty inherited property should be returned
   */
//  void setForcePropertyEmpty(in string propertyName, in boolean aForcePropertyEmpty);
	setForcePropertyEmpty: function _setForcePropertyEmpty(propertyName, aForcePropertyEmpty)
	{
		dump("mivExchangeMsgIncomingServer: function setForcePropertyEmpty\n");
	},

  /**
   * Get a boolean to force an inherited propertyName to return empty instead
   * of inheriting from a parent folder, server, or the global
   *
   * @param propertyName      The name of the property
   *
   * @return                  true if an empty inherited property should be returned
   */
//  boolean getForcePropertyEmpty(in string propertyName);
	getForcePropertyEmpty: function _getForcePropertyEmpty(propertyName)
	{
		dump("mivExchangeMsgIncomingServer: function getForcePropertyEmpty\n");
	},

  /**
   * Return the order in which this server type should appear in the folder pane.
   * This sort order is a number between 100000000 and 900000000 so that RDF can
   * use it as a string.
   * The current return values are these:
   * 0 = default account,       100000000 = mail accounts (POP3/IMAP4),
   * 200000000 = Local Folders, 300000000 = IM accounts,
   * 400000000 = RSS,           500000000 = News
   * If a new server type is created a TB UI reviewer must decide its sort order.
   */
//  readonly attribute long sortOrder;
	get sortOrder()
	{
		dump("mivExchangeMsgIncomingServer: get sortOrder\n");
		return 100000000;
	},


};

function NSGetFactory(cid) {

	try {
		if (!NSGetFactory.mivExchangeMsgIncomingServer) {
			NSGetFactory.mivExchangeMsgIncomingServer = XPCOMUtils.generateNSGetFactory([mivExchangeMsgIncomingServer]);

	}

	} catch(e) {
		Components.utils.reportError(e);
		dump(e);
		throw e;
	}

	return NSGetFactory.mivExchangeMsgIncomingServer(cid);
} 
