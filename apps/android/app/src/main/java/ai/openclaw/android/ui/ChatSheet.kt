package ai.gensparx.android.ui

import androidx.compose.runtime.Composable
import ai.gensparx.android.MainViewModel
import ai.gensparx.android.ui.chat.ChatSheetContent

@Composable
fun ChatSheet(viewModel: MainViewModel) {
  ChatSheetContent(viewModel = viewModel)
}
