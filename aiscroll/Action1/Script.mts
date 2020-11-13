AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("HP ELITEPAD 1000 62 TABLET").Click
AIUtil.FindTextBlock("View Details >", micFromLeft, 1).Click
AIUtil.FindTextBlock("HP ELITEPAD 1000 G2 TABLET").CheckExists True
AIUtil.FindTextBlock("dvantageDEMO").Click




