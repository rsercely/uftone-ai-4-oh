AIUtil.SetContext Browser("creationtime:=0")

Browser("creationtime:=0").Maximize ' might need this

AIUtil("profile").Click
AIUtil("input", "Usemame").Highlight ' SOMETIMES a necessary "hack for reliable replay
									' this field scrolls down, and without this Highlight
									' The Mercury can get "lost"
							
AIUtil("input", "Usemame").Type "Mercury"                            ' got created as Usemame
										' Probably should be corrected to Username
AIUtil("input", "Password").Type "Mercury"
AIUtil("button", "SIGN IN").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("Sign out").Click


Browser("creationtime:=0").Close ' optional


' If you find you need to synchronize, uou can  always add
'Browser("creationtime:=0").Maximize
' 	or
' wait 5
' to wait a 5 seconds, if the Sync doesn't work


