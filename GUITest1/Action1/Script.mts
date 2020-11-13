
AIUtil.SetContext Browser("creationtime:=0")
AIUtil("profile").Click
AIUtil.FindTextBlock("Username").Highlight
AIUtil.FindTextBlock("Username").Type "Mercury"
AIUtil.FindTextBlock("Password").Type "Mercury"
AIUtil("button", "SIGN IN").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Click
